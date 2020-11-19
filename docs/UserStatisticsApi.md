# ConradConnectPaasApi.UserStatisticsApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStats**](UserStatisticsApi.md#getStats) | **GET** /stats/users-with-devices | Get the list of users with devices and the number of devices per provider

<a name="getStats"></a>
# **getStats**
> GetStatsResponse getStats()

Get the list of users with devices and the number of devices per provider

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;
// Configure HTTP basic authorization: httpBasicClientCredentials
let httpBasicClientCredentials = defaultClient.authentications['httpBasicClientCredentials'];
httpBasicClientCredentials.username = 'YOUR USERNAME';
httpBasicClientCredentials.password = 'YOUR PASSWORD';

let apiInstance = new ConradConnectPaasApi.UserStatisticsApi();
apiInstance.getStats().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetStatsResponse**](GetStatsResponse.md)

### Authorization

[httpBasicClientCredentials](../README.md#httpBasicClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

