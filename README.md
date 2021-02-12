# CC Platform as a Service (PaaS) API

#### Version 1.0.3

The Conrad Connect Platform as a Service API enables you to use the IoT core and environment of Conrad Connect within your own software. This generates endless possibilities for automation and services.

## Get API Access

Please see https://conradconnect.com/en/platform-service for contact information. 

## Introduction

Using the PaaS API you should still maintain your own backend to administrate users and resources. With the API you can manage your own users in the Conrad Connect platform, provide them with the possibility to connect to providers with their user account, access the data of the user's devices, interact with devices, and trigger projects (automations).

In the following, necessary steps and hints are given on how to use the API. The swagger document you received will guide you through more detailed options when performing requests, whereas this documentation focusses on the basics.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @conradconnect/paas-api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
npm install ConradConnect/paas-api --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ConradConnectPaasApi = require('@conradconnect/paas-api');
var defaultClient = ConradConnectPaasApi.ApiClient.instance;


var api = new ConradConnectPaasApi.ActionButtonInteractionApi()
var project = "project_example"; // {String} Project id
var opts = { 
  'body': new ConradConnectPaasApi.ExecuteActionButtonProjectBody() // {ExecuteActionButtonProjectBody} 
};
api.executeActionButtonProject(project, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

## Environments

There are two environments available, namely production and staging.

The URL of the **production** environment is:
`https://dashboard.conradconnect.de/paasapi/`
Respectively, for the **staging** environment:
`https://conradconnect-dashboard-staging.waylay.io/paasapi/`

On both environments, Cross-Origin Resource Sharing (CORS) is currently not enabled. Therefore it is best, if you proxy all requests through your application.

## Credentials

You receive a valid client_id and client_secret pair by Conrad Connect.
**Do not leak this credential pair to your users.** It is supposed to be only used on your backend and should never be accessible by users.

For some calls from your backend to the Conrad Connect API, you have to include these credentials using the the `Authorization` header. If your request library does not handle client id and secret, please provide the header through their base64 representation. You can encode the credentials in base64 by:

```
echo -n username:supersecretpassword | base64
```

The full auth header should then be:

```
Authorization: Basic dXNlcm5hbWU6c3VwZXJzZWNyZXRwYXNzd29yZA
```

## User Management

There are two endpoints which allow you to handle users using your credentials. With `GET /users` you receive a full list of already registered users (for your corresponding credential pairs) and with `POST /users` you can create a new one.

#### New user

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/users' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic <base64credentials>' \
--data-raw '{
    "email": "example@example.com",
    "password": "anypassword",
    "language": "en"
}'
```

Upon successful creation, you receive the new user object. The example above does not contain additional user information, however you can already append these in the `firstName` and `lastName` properties. Otherwise, the user can edit them subsequent through the `PATCH /users/me` (see next section).

#### List users

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/users' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <base64credentials>'
```

You will receive a json, containing the list of users in the `data` property, such as:

```json
{
  "object": "list",
  "data": [
    {
      "id": "5cdd347ec7e37e6e71430410",
      "object": "user",
      "createdAt": 1546344000,
      "email": "example@example.com",
      "firstName": "first name",
      "lastName": "last name",
      "language": "en"
    }
  ]
}
```

## User-facing Endpoints

#### Login and refresh

The user has to login using their personal email and password combination using an OAuth 2.0 password grant process.

You can exchange valid username/password for an access and refresh token:

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/oauth/token' \
--header 'Authorization: Basic <base64credentials>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'username=example@example.com' \
--data-urlencode 'password=anypassword'
```

Currently, your client credentials (_Authorization header_) is also **required** in this request. Therefore, please do not let the user client directly perform this request.

The json return contains: `access_token`, `refresh_token`, `expires_in`, `expires_at`, and `token_type`.
Important for use are mainly the `access_token`, which can be used to perform requests for the user. After invalidation after a certain amount of time (`expires_in`), the `refresh_token` is needed to receive a new `access_token`:

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/oauth/token' \
--header 'Authorization: Basic <base64credentials>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=refresh_token' \
--data-urlencode 'refresh_token=<refresh_token_from_above_login>'
```

#### Update and delete

Additional to login, there is an `PATCH /users/me` endpoint and a `DELETE /users/me` endpoint available.
The `PATCH` endpoint works with partial sets of the user properties, e.g. only the password can be changed. `DELETE` is self-explaining.

These endpoints are using the user auth without your client credentials. Therefore they should contain an auth header:

```
Authorization: Bearer <access_token>
```

## Provider Management

A provider is a with Conrad Connect connected brand. The user account itself will connect (mostly through OAuth) to the provider. A provider can either be of the type `device` or `service` (e.g. Google Calendar).

#### List providers

You receive a list of all available providers through the `GET /providers` endpoint:

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/providers' \
--header 'Authorization: Bearer <access_token>'
```

The array of providers is nested in the `data` property. On the first level of properties you find the provider object as documented in the table below:

##### Provider object

| Property        | Type    | Description                                                                                |
| --------------- | ------- | ------------------------------------------------------------------------------------------ |
| id              | string  | Provider ID, needed for establishing a connection                                          |
| info            | object  | explained in the provider info table below                                                 |
| isAuthenticated | boolean | true if the user is connected to this provider                                             |
| isB2B           | boolean | true for B2B providers                                                                     |
| name            | string  | Internal provider name                                                                     |
| prettyName      | string  | Provider name to be shown to the user. Use the "name" property if this one is not supplied |

##### Provider info

| Property         | Type    | Description                                                                                                   |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| auth             | object  | authType (string) contains information how the auth is performed, requiredFields is not needed for the moment |
| authHelper       | boolean | if true, additional explanation how to auth this provider needs to be supplied to the user                    |
| b2bOnlyAuth      | boolean | not needed for PaaS                                                                                           |
| documentationUrl | string  | URL to documentation about the provider (usually on provider site)                                            |
| imageUrl         | string  | not needed, a path to the large provider image on the Conrad Connect page                                     |
| logoUrl          | string  | URL to the provider logo. Useful to display an overview                                                       |
| plugIconUrl      | string  | URL to the icon which is e.g. used in the Conrad Connect project editor                                       |

#### Connect a provider

In order to connect a user with a provider, in most cases you need to redirect this user to an OAuth procedure in the Conrad Connect platform.
You start the process through this endpoint:

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/providers/<providerId>/connect?redirect_uri=<redirect_uri>' \
--header 'Authorization: Bearer <access_token>'
```

In case of success, the endpoint returns with a 3xx status code. Depending on the method/framework you are using, you might have to manually redirect the client to the page provided by the location header (_cf._ [https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)).

After performing the authentication, the user is redirected to your site. Please set a redirect uri by the `redirect_uri` query parameter in the http query above.

#### Refresh and disconnect provider

Upon connection, the devices are not yet refreshed. In order to receive the device list, you need to refresh the provider for the connecting user:

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/providers/<providerId>/refresh' \
--header 'Authorization: Bearer <access_token>'
```

Similar, disconnect and a disconnect with deleting the user's date are also available: `POST /providers/<providerId>/disconnect` and `POST /providers/<providerId>/disconnect-and-delete-data`, respectively.

## Device and Data Abstraction

#### Structure

A provider can have many independent devices. Each of these devices has `types`. Currently available types are: `button, contact, motion, lamp, doorlock, audio`. This is not a final list.

In general, a device can have properties, such as `on_off, brightness, temperature` and events (e.g. `temperature_change, button_1_short_click`). Properties can be readable and/or writable.
Available definitions can be queried using the `GET /abstraction/list-all` endpoint. A formatted list of the `GET /abstraction/list-all` data is also available at:
[Conrad Connect Developer Portal -> Documentation -> Devices](https://developer.conradconnect.de/app/documentation/devices) (requires an Developer Portal account).

#### Get devices

Using the `GET /abstraction/device` endpoint, you can receive a filtered list of devices. Filtering is possible for types, properties, and events.

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/abstraction/device' \
--header 'Authorization: Bearer <access_token>'
```

It returns a list of single devices, examples can be found in the swagger file.
You can apply various filters for `types`, `properties`, and `events` by appending them to the query string, e.g. `GET /abstraction/device?types[]=motion&types[]=dimmer` which would return devices which have the types`motion` or `dimmer`.

#### Device IoT data

You can query data using the `GET /device/<deviceId>/data/<property>`

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/abstraction/device/<deviceId>/data/<property>' \
--header 'Authorization: Bearer <access_token>'
```

It returns an array of objects containing `property`, `value`, and `timestamp` (in ms).

In case you only want to receive the latest datapoint, you can append `/latest` to the route which will give you only one point.

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/abstraction/device/<deviceId>/data/<property>/latest' \
--header 'Authorization: Bearer <access_token>'
```

There are several optional query parameter to filter the output, namingly `from` (timestamp in ms), `until` (timestamp in ms), `grouping` (group data by this grouping, $[w,d,h,m,s,ms] (where $ is a number) or [week, day, hour, minute, second] or an ISO-8601 duration), and `aggregate` ("mean", "median", "min", "max", "sum", "count", "first", "last", "std" (standard deviation), "percentile(n)" (0 < n <= 1)).

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/abstraction/device/5e4d5b0b804235c274aaf84/data/steps?from=1583671549457&until=1583757949457&grouping=hour&aggregate=mean' \
--header 'Authorization: Bearer <access_token>'
```

> **Note:** You can query for 2000 points at maximum.
>
> In case you would like to query for more points, you need to split your requested data into smaller chunks.

#### Device actuation

On `writable` properties you can actuate using the `POST /abstraction/device/<deviceId>/actuate` endpoint:

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/abstraction/device/5e4d5b0b80422235c274aaf84/actuate' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "property": "on_off",
    "value": true
}'
```

#### Device events

Events work in the following way:
You can create a subscription to an event of a device with the `POST /abstraction/device/<deviceId>/event`
Please provide the following properties in the request body:

- `event`: Name of the event
- `triggers`: Optional, in case an event possesses multiple trigger
- `url`: The callback url which is called in case of an event.
- the `token` property is documented in the swagger, however it does not have a special safety meaning. It is used as an identifier.

You may want to list subscriptions, which can be done through the `GET /abstraction/subscriptions?token=<identifier>` endpoint. The token identifier has to match the identifier which has been used for creation. However, they are not yet user specific, therefore subscriptions created by another user of you would be shown as well (except you use different token identifier). It returns an array ob subscriptions, the `task` is a synonym for the `subscription` id.

An event can be unsubscribed through `DELETE /abstraction/event/<subscription/task>`.

## Action Buttons

In Conrad Connect, projects can be triggered through so-called **Action Buttons**. These Action Buttons can be included on a Dashboard, but they also provide a simple way to execute a complex automation through externally triggering them.

```bash
curl --location --request GET 'https://dashboard.conradconnect.de/paasapi/abstraction/do' \
--header 'Authorization: Bearer <access_token>'
```

Returns the action button projects for a user. Using the returned `id` of an project, you can activate it:

```bash
curl --location --request POST 'https://dashboard.conradconnect.de/paasapi/abstraction/do/<projectId>' \
--header 'Authorization: Bearer <access_token>' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{ "event": "single press" }'
```

Currently, **only** the single press actuation is implemented.
