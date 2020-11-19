# ConradConnectPaasApi.DeviceInteractionApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actuateDevice**](DeviceInteractionApi.md#actuateDevice) | **POST** /abstraction/device/{device}/actuate | Perform an action on a device
[**getDeviceDataForProperty**](DeviceInteractionApi.md#getDeviceDataForProperty) | **GET** /abstraction/device/{device}/data/{property} | Get historical data for a readable property of a device
[**getDeviceEventSubscriptions**](DeviceInteractionApi.md#getDeviceEventSubscriptions) | **GET** /abstraction/subscriptions | Get a list of running subscriptions, started by the abstraction API
[**getDeviceTypes**](DeviceInteractionApi.md#getDeviceTypes) | **GET** /abstraction/device-types | Returns a list of supported device types
[**getDevicesSummary**](DeviceInteractionApi.md#getDevicesSummary) | **GET** /abstraction/list-all | Returns the current state of the abstraction layer with complete list of all currently used types and property and event names. 
[**getLatestDeviceDataForProperty**](DeviceInteractionApi.md#getLatestDeviceDataForProperty) | **GET** /abstraction/device/{device}/data/{property}/latest | Get the latest value for a readable property of a device
[**getUserDevices**](DeviceInteractionApi.md#getUserDevices) | **GET** /abstraction/device | Query devices of a user
[**subscribeToDeviceEvent**](DeviceInteractionApi.md#subscribeToDeviceEvent) | **POST** /abstraction/device/{device}/event | Subscribe to an event of a device
[**unsubscribeFromDeviceEvent**](DeviceInteractionApi.md#unsubscribeFromDeviceEvent) | **DELETE** /abstraction/event/{subscription} | Unsubscribes from an event

<a name="actuateDevice"></a>
# **actuateDevice**
> actuateDevice(device, opts)

Perform an action on a device

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let device = "device_example"; // String | id of a device
let opts = { 
  'body': new ConradConnectPaasApi.ActuateDeviceBody() // ActuateDeviceBody | 
};
apiInstance.actuateDevice(device, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **String**| id of a device | 
 **body** | [**ActuateDeviceBody**](ActuateDeviceBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getDeviceDataForProperty"></a>
# **getDeviceDataForProperty**
> getDeviceDataForProperty(device, property, opts)

Get historical data for a readable property of a device

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let device = "device_example"; // String | id of a device
let property = "property_example"; // String | name of the property
let opts = { 
  'from': 56, // Number | data points should be collected starting from this timestamp in milliseconds
  'until': 56, // Number | data points should be collected up to this timestamp in milliseconds
  'grouping': "auto", // String | group data by this grouping, $[w,d,h,m,s,ms] (where $ is a number) or [week, day, hour, minute, second] or an ISO-8601 duration,
  'aggregate': "mean" // String | specify the aggregator function, e.g. \"mean\", \"median\", \"min\", \"max\", \"sum\", \"count\", \"first\", \"last\", \"std\" (standard deviation), \"percentile(n)\" (0 < n <= 1)
};
apiInstance.getDeviceDataForProperty(device, property, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **String**| id of a device | 
 **property** | **String**| name of the property | 
 **from** | **Number**| data points should be collected starting from this timestamp in milliseconds | [optional] 
 **until** | **Number**| data points should be collected up to this timestamp in milliseconds | [optional] 
 **grouping** | **String**| group data by this grouping, $[w,d,h,m,s,ms] (where $ is a number) or [week, day, hour, minute, second] or an ISO-8601 duration, | [optional] [default to auto]
 **aggregate** | **String**| specify the aggregator function, e.g. \&quot;mean\&quot;, \&quot;median\&quot;, \&quot;min\&quot;, \&quot;max\&quot;, \&quot;sum\&quot;, \&quot;count\&quot;, \&quot;first\&quot;, \&quot;last\&quot;, \&quot;std\&quot; (standard deviation), \&quot;percentile(n)\&quot; (0 &lt; n &lt;&#x3D; 1) | [optional] [default to mean]

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceEventSubscriptions"></a>
# **getDeviceEventSubscriptions**
> [GetDeviceEventSubscriptionsResponse] getDeviceEventSubscriptions(token)

Get a list of running subscriptions, started by the abstraction API

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let token = "token_example"; // String | token of the user who the action will be called for

apiInstance.getDeviceEventSubscriptions(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| token of the user who the action will be called for | 

### Return type

[**[GetDeviceEventSubscriptionsResponse]**](GetDeviceEventSubscriptionsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceTypes"></a>
# **getDeviceTypes**
> [GetDeviceTypesResponse] getDeviceTypes()

Returns a list of supported device types

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
apiInstance.getDeviceTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[GetDeviceTypesResponse]**](GetDeviceTypesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDevicesSummary"></a>
# **getDevicesSummary**
> [GetDevicesSummaryResponse] getDevicesSummary()

Returns the current state of the abstraction layer with complete list of all currently used types and property and event names. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
apiInstance.getDevicesSummary().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[GetDevicesSummaryResponse]**](GetDevicesSummaryResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestDeviceDataForProperty"></a>
# **getLatestDeviceDataForProperty**
> getLatestDeviceDataForProperty(device, property)

Get the latest value for a readable property of a device

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let device = "device_example"; // String | id of a device
let property = "property_example"; // String | name of the property

apiInstance.getLatestDeviceDataForProperty(device, property).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **String**| id of a device | 
 **property** | **String**| name of the property | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserDevices"></a>
# **getUserDevices**
> getUserDevices(opts)

Query devices of a user

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let opts = { 
  'types': [new ConradConnectPaasApi.DeviceType()], // [DeviceType] | Types of devices to find
  'properties': ["properties_example"], // [String] | Properties of a device to find
  'events': [new ConradConnectPaasApi.Event()], // [Event] | Events of a device to find
  'readableProperties': ["readableProperties_example"], // [String] | Readable Properties of a device to find
  'writableProperties': ["writableProperties_example"] // [String] | Writable Properties of a device to find
};
apiInstance.getUserDevices(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **types** | [**[DeviceType]**](DeviceType.md)| Types of devices to find | [optional] 
 **properties** | [**[String]**](String.md)| Properties of a device to find | [optional] 
 **events** | [**[Event]**](Event.md)| Events of a device to find | [optional] 
 **readableProperties** | [**[String]**](String.md)| Readable Properties of a device to find | [optional] 
 **writableProperties** | [**[String]**](String.md)| Writable Properties of a device to find | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscribeToDeviceEvent"></a>
# **subscribeToDeviceEvent**
> SubscribeToDeviceEventResponse subscribeToDeviceEvent(device, opts)

Subscribe to an event of a device

You provide a device id, an event, an optional callback url and a payload to be sent back. Every time the device (sensor) triggers the event, the callback url (or the default mydaco API) will receive a message. The response message contains the parameters token, device, event, value and task. Token, device and event are as specified in the event subscription.  The parameter value is reserved for events which provide some sensor data, for example thermostats would provide the current temperature. It&#x27;s currently not in use.  The mydaco API will also receive the id of the waylay task that includes the sensor plugs, which trigger this event. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let device = "device_example"; // String | id of a device
let opts = { 
  'body': new ConradConnectPaasApi.SubscribeToDeviceEventBody() // SubscribeToDeviceEventBody | 
};
apiInstance.subscribeToDeviceEvent(device, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **String**| id of a device | 
 **body** | [**SubscribeToDeviceEventBody**](SubscribeToDeviceEventBody.md)|  | [optional] 

### Return type

[**SubscribeToDeviceEventResponse**](SubscribeToDeviceEventResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unsubscribeFromDeviceEvent"></a>
# **unsubscribeFromDeviceEvent**
> unsubscribeFromDeviceEvent(subscription)

Unsubscribes from an event

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.DeviceInteractionApi();
let subscription = 56; // Number | 

apiInstance.unsubscribeFromDeviceEvent(subscription).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

