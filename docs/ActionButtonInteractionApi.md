# ConradConnectPaasApi.ActionButtonInteractionApi

All URIs are relative to *https://dashboard.conradconnect.de/paasapi/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeActionButtonProject**](ActionButtonInteractionApi.md#executeActionButtonProject) | **POST** /abstraction/do/{project} | 
[**listActionButtonProjects**](ActionButtonInteractionApi.md#listActionButtonProjects) | **GET** /abstraction/do | 

<a name="executeActionButtonProject"></a>
# **executeActionButtonProject**
> executeActionButtonProject(project, opts)



### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ActionButtonInteractionApi();
let project = "project_example"; // String | Project id
let opts = { 
  'body': new ConradConnectPaasApi.ExecuteActionButtonProjectBody() // ExecuteActionButtonProjectBody | 
};
apiInstance.executeActionButtonProject(project, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| Project id | 
 **body** | [**ExecuteActionButtonProjectBody**](ExecuteActionButtonProjectBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listActionButtonProjects"></a>
# **listActionButtonProjects**
> ListActionButtonProjectsResponse listActionButtonProjects()



### Example
```javascript
import ConradConnectPaasApi from '@conradconnect/paas-api';
let defaultClient = ConradConnectPaasApi.ApiClient.instance;


let apiInstance = new ConradConnectPaasApi.ActionButtonInteractionApi();
apiInstance.listActionButtonProjects().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ListActionButtonProjectsResponse**](ListActionButtonProjectsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

