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

import ApiClient from "../ApiClient";
import GetStatsResponse from '../model/GetStatsResponse';

/**
* UserStatistics service.
* @module api/UserStatisticsApi
* @version 1.1.1-beta2
*/
export default class UserStatisticsApi {

    /**
    * Constructs a new UserStatisticsApi. 
    * @alias module:api/UserStatisticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get the list of users with devices and the number of devices per provider
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatsResponse} and HTTP response
     */
    getStatsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['httpBasicClientCredentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStatsResponse;

      return this.apiClient.callApi(
        '/stats/users-with-devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the list of users with devices and the number of devices per provider
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatsResponse}
     */
    getStats() {
      return this.getStatsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
