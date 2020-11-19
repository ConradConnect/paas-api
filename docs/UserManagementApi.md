# ConradConnectPaasApi.UserManagementApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserManagementApi.md#createUser) | **POST** /users | Create a new user
[**deleteMe**](UserManagementApi.md#deleteMe) | **DELETE** /users/me | Delete authenticated user
[**getMe**](UserManagementApi.md#getMe) | **GET** /users/me | Get authenticated user
[**getUsers**](UserManagementApi.md#getUsers) | **GET** /users | Get the list of accessible users
[**updateMe**](UserManagementApi.md#updateMe) | **PATCH** /users/me | Update authenticated user

<a name="createUser"></a>
# **createUser**
> User createUser(opts)

Create a new user

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;
// Configure HTTP basic authorization: httpBasicClientCredentials
let httpBasicClientCredentials = defaultClient.authentications['httpBasicClientCredentials'];
httpBasicClientCredentials.username = 'YOUR USERNAME';
httpBasicClientCredentials.password = 'YOUR PASSWORD';

let apiInstance = new ConradConnectPaasApi.UserManagementApi();
let opts = { 
  'body': new ConradConnectPaasApi.CreateUserBody() // CreateUserBody | 
};
apiInstance.createUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUserBody**](CreateUserBody.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[httpBasicClientCredentials](../README.md#httpBasicClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMe"></a>
# **deleteMe**
> deleteMe()

Delete authenticated user

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.UserManagementApi();
apiInstance.deleteMe().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMe"></a>
# **getMe**
> User getMe()

Get authenticated user

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.UserManagementApi();
apiInstance.getMe().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> GetUsersResponse getUsers()

Get the list of accessible users

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;
// Configure HTTP basic authorization: httpBasicClientCredentials
let httpBasicClientCredentials = defaultClient.authentications['httpBasicClientCredentials'];
httpBasicClientCredentials.username = 'YOUR USERNAME';
httpBasicClientCredentials.password = 'YOUR PASSWORD';

let apiInstance = new ConradConnectPaasApi.UserManagementApi();
apiInstance.getUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetUsersResponse**](GetUsersResponse.md)

### Authorization

[httpBasicClientCredentials](../README.md#httpBasicClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateMe"></a>
# **updateMe**
> User updateMe(opts)

Update authenticated user

Send any subset of valid properties to update. On success this endpoint will return the updated user object. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.UserManagementApi();
let opts = { 
  'body': new ConradConnectPaasApi.UpdateMeBody() // UpdateMeBody | 
};
apiInstance.updateMe(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateMeBody**](UpdateMeBody.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

