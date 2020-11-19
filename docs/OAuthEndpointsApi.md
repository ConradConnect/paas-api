# ConradConnectPaasApi.OAuthEndpointsApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postOauthPassword**](OAuthEndpointsApi.md#postOauthPassword) | **POST** /oauth/token#p | Exchange either a username and password for an access and refresh token.
[**postOauthRefresh**](OAuthEndpointsApi.md#postOauthRefresh) | **POST** /oauth/token#r | Exchange either a refresh token for an access token.

<a name="postOauthPassword"></a>
# **postOauthPassword**
> AccessToken postOauthPassword(grantTypeusernamepassword)

Exchange either a username and password for an access and refresh token.

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;
// Configure HTTP basic authorization: httpBasicClientCredentials
let httpBasicClientCredentials = defaultClient.authentications['httpBasicClientCredentials'];
httpBasicClientCredentials.username = 'YOUR USERNAME';
httpBasicClientCredentials.password = 'YOUR PASSWORD';

let apiInstance = new ConradConnectPaasApi.OAuthEndpointsApi();
let grantType = "grantType_example"; // String | 
let username = "username_example"; // String | 
let password = "password_example"; // String | 

apiInstance.postOauthPassword(grantTypeusernamepassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**|  | 
 **username** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[httpBasicClientCredentials](../README.md#httpBasicClientCredentials)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="postOauthRefresh"></a>
# **postOauthRefresh**
> AccessToken postOauthRefresh(grantTyperefreshToken)

Exchange either a refresh token for an access token.

### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;
// Configure HTTP basic authorization: httpBasicClientCredentials
let httpBasicClientCredentials = defaultClient.authentications['httpBasicClientCredentials'];
httpBasicClientCredentials.username = 'YOUR USERNAME';
httpBasicClientCredentials.password = 'YOUR PASSWORD';

let apiInstance = new ConradConnectPaasApi.OAuthEndpointsApi();
let grantType = "grantType_example"; // String | 
let refreshToken = "refreshToken_example"; // String | 

apiInstance.postOauthRefresh(grantTyperefreshToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**|  | 
 **refreshToken** | **String**|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[httpBasicClientCredentials](../README.md#httpBasicClientCredentials)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

