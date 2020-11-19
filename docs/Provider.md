# ConradConnectPaasApi.Provider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal name of the provider | [optional] 
**_object** | **String** |  | [optional] 
**info** | [**ProviderInfo**](ProviderInfo.md) |  | [optional] 
**isAuthenticated** | **Boolean** | true iff the user is authenticated with this provider | [optional] 
**isB2B** | **Boolean** | true iff this provider is relevant for Conrad Connect Professional | [optional] 
**name** | **String** | Internal name of the provider (same as id) | [optional] 
**prettyName** | **String** | Provider name that can be displayed to the user | [optional] 
**type** | **String** | A provider of type *device* offers connection to physical devices. A provider of type *service* offers virtual devices like access to APIs.  | [optional] 

<a name="ObjectEnum"></a>
## Enum: ObjectEnum

* `provider` (value: `"provider"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `device` (value: `"device"`)
* `service` (value: `"service"`)

