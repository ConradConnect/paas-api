# ConradConnectPaasApi.SubscribeToDeviceEventBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggers** | **[String]** | Event trigger of the device | [optional] 
**event** | **String** | event to subscribe to (from GET /device) | [optional] 
**token** | **String** | token of the user who the action will be called for | [optional] 
**lt** | **Number** | The lower bound of an event that has a numeric number, if none set than Infinity/-Inifinity | [optional] 
**gt** | **Number** | The lower bound of an event that has a numeric number, if none set than Infinity/-Inifinity | [optional] 
**url** | **String** | The callback url which will receive the message each time the device triggers the event, if none set then will be sent to mydaco API. | [optional] 
