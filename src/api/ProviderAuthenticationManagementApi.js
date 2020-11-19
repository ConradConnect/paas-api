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
import GetProvidersListResponse from '../model/GetProvidersListResponse';

/**
* ProviderAuthenticationManagement service.
* @module api/ProviderAuthenticationManagementApi
* @version 1.1.1-beta2
*/
export default class ProviderAuthenticationManagementApi {

    /**
    * Constructs a new ProviderAuthenticationManagementApi. 
    * @alias module:api/ProviderAuthenticationManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    connectProviderWithHttpInfo(provider, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
        'redirect_uri': opts['redirectUri']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/providers/{provider}/connect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    connectProvider(provider, opts) {
      return this.connectProviderWithHttpInfo(provider, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Disconnect the provider by removing all authentication information like access tokens, refresh tokens and stored passwords. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    disconnectProviderWithHttpInfo(provider) {
      let postBody = null;

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/providers/{provider}/disconnect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Disconnect the provider by removing all authentication information like access tokens, refresh tokens and stored passwords. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    disconnectProvider(provider) {
      return this.disconnectProviderWithHttpInfo(provider)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Similar to *_/disconnect*, but also deletes all stored data like device names and metric values. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    disconnectProviderAndDeleteDataWithHttpInfo(provider) {
      let postBody = null;

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/providers/{provider}/disconnect-and-delete-data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Similar to *_/disconnect*, but also deletes all stored data like device names and metric values. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    disconnectProviderAndDeleteData(provider) {
      return this.disconnectProviderAndDeleteDataWithHttpInfo(provider)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProvidersListResponse} and HTTP response
     */
    getProvidersListWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProvidersListResponse;

      return this.apiClient.callApi(
        '/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProvidersListResponse}
     */
    getProvidersList() {
      return this.getProvidersListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    refreshProviderWithHttpInfo(provider) {
      let postBody = null;

      let pathParams = {
        'provider': provider
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/providers/{provider}/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    refreshProvider(provider) {
      return this.refreshProviderWithHttpInfo(provider)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
