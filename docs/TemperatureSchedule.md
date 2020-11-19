# ConradConnectPaasApi.TemperatureSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Number** | Seconds-based unix timestamp. | [optional] 
**device** | **String** | ID of the device which this schedule controls. | [optional] 
**endTime** | **String** | The time of day to end the schedule, in UTC 24 hour time, HH:mm format. If the end time is before the start time (e.g. startTime &#x3D; \&quot;20:00\&quot; and endTime &#x3D; \&quot;04:00\&quot;), the endTime is interpreted as &#x27;tomorrow&#x27; with respect to the startTime&#x27;s &#x27;today&#x27;. | [optional] 
**id** | **String** | 12 byte BSON string. | [optional] 
**isRunning** | **Boolean** | true if the schedule is applied at the moment of request, false otherwise. | [optional] 
**_object** | **String** |  | [optional] 
**startTime** | **String** | The time of day to start the schedule, in UTC 24 hour time, HH:mm format. If the start time is after the end time (e.g. startTime &#x3D; \&quot;20:00\&quot; and endTime &#x3D; \&quot;04:00\&quot;), the endTime is interpreted as &#x27;tomorrow&#x27; with respect to the startTime&#x27;s &#x27;today&#x27;. | [optional] 
**temperatureDelta** | **Number** | Amount of change (in degrees celcius) to apply to the device when the schedule is activated | [optional] 
**user** | **String** | ID of the user who owns the schedule | [optional] 

<a name="ObjectEnum"></a>
## Enum: ObjectEnum

* `schedule` (value: `"schedule"`)

