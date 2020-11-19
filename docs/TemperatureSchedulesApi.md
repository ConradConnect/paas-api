# ConradConnectPaasApi.TemperatureSchedulesApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemperatureSchedule**](TemperatureSchedulesApi.md#createTemperatureSchedule) | **POST** /temperature-schedules | Create a temperature schedule
[**deleteTemperatureSchedule**](TemperatureSchedulesApi.md#deleteTemperatureSchedule) | **DELETE** /temperature-schedules/{schedule} | Delete a temperature schedule by ID
[**getTemperatureSchedule**](TemperatureSchedulesApi.md#getTemperatureSchedule) | **GET** /temperature-schedules/{schedule} | Get a temperature schedule by ID
[**getTemperatureSchedules**](TemperatureSchedulesApi.md#getTemperatureSchedules) | **GET** /temperature-schedules | Get a list of temperature schedules

<a name="createTemperatureSchedule"></a>
# **createTemperatureSchedule**
> TemperatureSchedule createTemperatureSchedule(body)

Create a temperature schedule

Create a new temperature schedule for the authenticated user. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.TemperatureSchedulesApi();
let body = new ConradConnectPaasApi.CreateTemperatureScheduleBody(); // CreateTemperatureScheduleBody | 

apiInstance.createTemperatureSchedule(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateTemperatureScheduleBody**](CreateTemperatureScheduleBody.md)|  | 

### Return type

[**TemperatureSchedule**](TemperatureSchedule.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTemperatureSchedule"></a>
# **deleteTemperatureSchedule**
> deleteTemperatureSchedule(schedule)

Delete a temperature schedule by ID

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.TemperatureSchedulesApi();
let schedule = "schedule_example"; // String | A temperature schedule 12 byte bson id

apiInstance.deleteTemperatureSchedule(schedule).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | **String**| A temperature schedule 12 byte bson id | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTemperatureSchedule"></a>
# **getTemperatureSchedule**
> TemperatureSchedule getTemperatureSchedule(schedule)

Get a temperature schedule by ID

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.TemperatureSchedulesApi();
let schedule = "schedule_example"; // String | A temperature schedule 12 byte bson id

apiInstance.getTemperatureSchedule(schedule).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | **String**| A temperature schedule 12 byte bson id | 

### Return type

[**TemperatureSchedule**](TemperatureSchedule.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemperatureSchedules"></a>
# **getTemperatureSchedules**
> GetTemperatureSchedulesResponse getTemperatureSchedules(opts)

Get a list of temperature schedules

Get a list of temperature schedules for the authenticated user. Optionally filter by a device id. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.TemperatureSchedulesApi();
let opts = { 
  'device': "device_example" // String | Only return temperature schedules pertaining to this device.
};
apiInstance.getTemperatureSchedules(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | **String**| Only return temperature schedules pertaining to this device. | [optional] 

### Return type

[**GetTemperatureSchedulesResponse**](GetTemperatureSchedulesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

