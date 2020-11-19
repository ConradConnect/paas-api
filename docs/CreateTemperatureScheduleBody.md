# ConradConnectPaasApi.CreateTemperatureScheduleBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **String** |  | 
**temperatureDelta** | **Number** |  | 
**startTime** | **String** | Time when the schedule should start in UTC. | 
**endTime** | **String** | Time when the schedule should end in UTC. | 
**daysOfWeek** | **[String]** | List of weekdays on which the schedule should run. | 

<a name="[DaysOfWeekEnum]"></a>
## Enum: [DaysOfWeekEnum]

* `Monday` (value: `"Monday"`)
* `Tuesday` (value: `"Tuesday"`)
* `Wednesday` (value: `"Wednesday"`)
* `Thursday` (value: `"Thursday"`)
* `Friday` (value: `"Friday"`)
* `Saturday` (value: `"Saturday"`)
* `Sunday` (value: `"Sunday"`)

