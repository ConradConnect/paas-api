# ConradConnectPaasApi.ProviderAuthenticationManagementApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectProvider**](ProviderAuthenticationManagementApi.md#connectProvider) | **POST** /providers/{provider}/connect | 
[**disconnectProvider**](ProviderAuthenticationManagementApi.md#disconnectProvider) | **POST** /providers/{provider}/disconnect | 
[**disconnectProviderAndDeleteData**](ProviderAuthenticationManagementApi.md#disconnectProviderAndDeleteData) | **POST** /providers/{provider}/disconnect-and-delete-data | 
[**getProvidersList**](ProviderAuthenticationManagementApi.md#getProvidersList) | **GET** /providers | 
[**refreshProvider**](ProviderAuthenticationManagementApi.md#refreshProvider) | **POST** /providers/{provider}/refresh | 

<a name="connectProvider"></a>
# **connectProvider**
> connectProvider(provider, opts)



### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ProviderAuthenticationManagementApi();
let provider = "provider_example"; // String | Internal provider name
let opts = { 
  'redirectUri': "redirectUri_example" // String | Where to send the user after the authentication process has concluded. If not specified, the user will be redirected to the provider page, indicating successful authentication.  Mobile deep linking is supported. 
};
apiInstance.connectProvider(provider, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| Internal provider name | 
 **redirectUri** | **String**| Where to send the user after the authentication process has concluded. If not specified, the user will be redirected to the provider page, indicating successful authentication.  Mobile deep linking is supported.  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="disconnectProvider"></a>
# **disconnectProvider**
> disconnectProvider(provider)



Disconnect the provider by removing all authentication information like access tokens, refresh tokens and stored passwords. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ProviderAuthenticationManagementApi();
let provider = "provider_example"; // String | Internal provider name

apiInstance.disconnectProvider(provider).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| Internal provider name | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="disconnectProviderAndDeleteData"></a>
# **disconnectProviderAndDeleteData**
> disconnectProviderAndDeleteData(provider)



Similar to *_/disconnect*, but also deletes all stored data like device names and metric values. 

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ProviderAuthenticationManagementApi();
let provider = "provider_example"; // String | Internal provider name

apiInstance.disconnectProviderAndDeleteData(provider).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| Internal provider name | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getProvidersList"></a>
# **getProvidersList**
> GetProvidersListResponse getProvidersList()



### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ProviderAuthenticationManagementApi();
apiInstance.getProvidersList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetProvidersListResponse**](GetProvidersListResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshProvider"></a>
# **refreshProvider**
> refreshProvider(provider)



### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ProviderAuthenticationManagementApi();
let provider = "provider_example"; // String | Internal provider name

apiInstance.refreshProvider(provider).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **String**| Internal provider name | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

