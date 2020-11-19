/**
 * Conrad Connect PaaS API v1.1.1 - CONFIDENTIAL
 * This document is strictly private, confidential and personal to its recipients and should not be copied, distributed or reproduced in whole or in part, nor passed to any third party. Defines the initial endpoints of the backend supported by CC that are relevant for the PaaS solution. 
 *
 * OpenAPI spec version: 1.1.1-beta2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import AccessToken from './model/AccessToken';
import ActuateDeviceBody from './model/ActuateDeviceBody';
import CreateTemperatureScheduleBody from './model/CreateTemperatureScheduleBody';
import CreateUserBody from './model/CreateUserBody';
import DeviceType from './model/DeviceType';
import DeviceTypeProperty from './model/DeviceTypeProperty';
import Event from './model/Event';
import ExecuteActionButtonProjectBody from './model/ExecuteActionButtonProjectBody';
import GetDeviceEventSubscriptionsResponse from './model/GetDeviceEventSubscriptionsResponse';
import GetDeviceTypesResponse from './model/GetDeviceTypesResponse';
import GetDevicesSummaryResponse from './model/GetDevicesSummaryResponse';
import GetProvidersListResponse from './model/GetProvidersListResponse';
import GetStatsResponse from './model/GetStatsResponse';
import GetTemperatureSchedulesResponse from './model/GetTemperatureSchedulesResponse';
import GetUsersResponse from './model/GetUsersResponse';
import InvalidParameterError from './model/InvalidParameterError';
import ListActionButtonProjectsResponse from './model/ListActionButtonProjectsResponse';
import NotFoundError from './model/NotFoundError';
import OAuthError from './model/OAuthError';
import PostOauthPasswordBody from './model/PostOauthPasswordBody';
import PostOauthRefreshBody from './model/PostOauthRefreshBody';
import Project from './model/Project';
import Property from './model/Property';
import Provider from './model/Provider';
import ProviderInfo from './model/ProviderInfo';
import ProviderInfoAuth from './model/ProviderInfoAuth';
import SubscribeToDeviceEventBody from './model/SubscribeToDeviceEventBody';
import SubscribeToDeviceEventResponse from './model/SubscribeToDeviceEventResponse';
import TemperatureSchedule from './model/TemperatureSchedule';
import UpdateMeBody from './model/UpdateMeBody';
import User from './model/User';
import UserStatistic from './model/UserStatistic';
import ActionButtonInteractionApi from './api/ActionButtonInteractionApi';
import DeviceInteractionApi from './api/DeviceInteractionApi';
import OAuthEndpointsApi from './api/OAuthEndpointsApi';
import ProviderAuthenticationManagementApi from './api/ProviderAuthenticationManagementApi';
import TemperatureSchedulesApi from './api/TemperatureSchedulesApi';
import UserManagementApi from './api/UserManagementApi';
import UserStatisticsApi from './api/UserStatisticsApi';

/**
* This project is a javascript SDK for the Conrad Connect PaaS API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ConradConnectPaasApi = require('index'); // See note below*.
* var xxxSvc = new ConradConnectPaasApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ConradConnectPaasApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ConradConnectPaasApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ConradConnectPaasApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.1.1-beta2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken,

    /**
     * The ActuateDeviceBody model constructor.
     * @property {module:model/ActuateDeviceBody}
     */
    ActuateDeviceBody,

    /**
     * The CreateTemperatureScheduleBody model constructor.
     * @property {module:model/CreateTemperatureScheduleBody}
     */
    CreateTemperatureScheduleBody,

    /**
     * The CreateUserBody model constructor.
     * @property {module:model/CreateUserBody}
     */
    CreateUserBody,

    /**
     * The DeviceType model constructor.
     * @property {module:model/DeviceType}
     */
    DeviceType,

    /**
     * The DeviceTypeProperty model constructor.
     * @property {module:model/DeviceTypeProperty}
     */
    DeviceTypeProperty,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The ExecuteActionButtonProjectBody model constructor.
     * @property {module:model/ExecuteActionButtonProjectBody}
     */
    ExecuteActionButtonProjectBody,

    /**
     * The GetDeviceEventSubscriptionsResponse model constructor.
     * @property {module:model/GetDeviceEventSubscriptionsResponse}
     */
    GetDeviceEventSubscriptionsResponse,

    /**
     * The GetDeviceTypesResponse model constructor.
     * @property {module:model/GetDeviceTypesResponse}
     */
    GetDeviceTypesResponse,

    /**
     * The GetDevicesSummaryResponse model constructor.
     * @property {module:model/GetDevicesSummaryResponse}
     */
    GetDevicesSummaryResponse,

    /**
     * The GetProvidersListResponse model constructor.
     * @property {module:model/GetProvidersListResponse}
     */
    GetProvidersListResponse,

    /**
     * The GetStatsResponse model constructor.
     * @property {module:model/GetStatsResponse}
     */
    GetStatsResponse,

    /**
     * The GetTemperatureSchedulesResponse model constructor.
     * @property {module:model/GetTemperatureSchedulesResponse}
     */
    GetTemperatureSchedulesResponse,

    /**
     * The GetUsersResponse model constructor.
     * @property {module:model/GetUsersResponse}
     */
    GetUsersResponse,

    /**
     * The InvalidParameterError model constructor.
     * @property {module:model/InvalidParameterError}
     */
    InvalidParameterError,

    /**
     * The ListActionButtonProjectsResponse model constructor.
     * @property {module:model/ListActionButtonProjectsResponse}
     */
    ListActionButtonProjectsResponse,

    /**
     * The NotFoundError model constructor.
     * @property {module:model/NotFoundError}
     */
    NotFoundError,

    /**
     * The OAuthError model constructor.
     * @property {module:model/OAuthError}
     */
    OAuthError,

    /**
     * The PostOauthPasswordBody model constructor.
     * @property {module:model/PostOauthPasswordBody}
     */
    PostOauthPasswordBody,

    /**
     * The PostOauthRefreshBody model constructor.
     * @property {module:model/PostOauthRefreshBody}
     */
    PostOauthRefreshBody,

    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project,

    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property,

    /**
     * The Provider model constructor.
     * @property {module:model/Provider}
     */
    Provider,

    /**
     * The ProviderInfo model constructor.
     * @property {module:model/ProviderInfo}
     */
    ProviderInfo,

    /**
     * The ProviderInfoAuth model constructor.
     * @property {module:model/ProviderInfoAuth}
     */
    ProviderInfoAuth,

    /**
     * The SubscribeToDeviceEventBody model constructor.
     * @property {module:model/SubscribeToDeviceEventBody}
     */
    SubscribeToDeviceEventBody,

    /**
     * The SubscribeToDeviceEventResponse model constructor.
     * @property {module:model/SubscribeToDeviceEventResponse}
     */
    SubscribeToDeviceEventResponse,

    /**
     * The TemperatureSchedule model constructor.
     * @property {module:model/TemperatureSchedule}
     */
    TemperatureSchedule,

    /**
     * The UpdateMeBody model constructor.
     * @property {module:model/UpdateMeBody}
     */
    UpdateMeBody,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserStatistic model constructor.
     * @property {module:model/UserStatistic}
     */
    UserStatistic,

    /**
    * The ActionButtonInteractionApi service constructor.
    * @property {module:api/ActionButtonInteractionApi}
    */
    ActionButtonInteractionApi,

    /**
    * The DeviceInteractionApi service constructor.
    * @property {module:api/DeviceInteractionApi}
    */
    DeviceInteractionApi,

    /**
    * The OAuthEndpointsApi service constructor.
    * @property {module:api/OAuthEndpointsApi}
    */
    OAuthEndpointsApi,

    /**
    * The ProviderAuthenticationManagementApi service constructor.
    * @property {module:api/ProviderAuthenticationManagementApi}
    */
    ProviderAuthenticationManagementApi,

    /**
    * The TemperatureSchedulesApi service constructor.
    * @property {module:api/TemperatureSchedulesApi}
    */
    TemperatureSchedulesApi,

    /**
    * The UserManagementApi service constructor.
    * @property {module:api/UserManagementApi}
    */
    UserManagementApi,

    /**
    * The UserStatisticsApi service constructor.
    * @property {module:api/UserStatisticsApi}
    */
    UserStatisticsApi
};