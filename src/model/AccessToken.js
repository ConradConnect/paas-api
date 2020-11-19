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

import ApiClient from '../ApiClient';

/**
* The AccessToken model module.
* @module model/AccessToken
* @version 1.1.1-beta2
*/
export default class AccessToken {
    /**
    * Constructs a new <code>AccessToken</code>.
    * @alias module:model/AccessToken
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AccessToken</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccessToken} obj Optional instance to populate.
    * @return {module:model/AccessToken} The populated <code>AccessToken</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessToken();
                        
            
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} access_token
    */
    'access_token' = undefined;
    /**
    * @member {String} refresh_token
    */
    'refresh_token' = undefined;
    /**
    * @member {Number} expires_in
    */
    'expires_in' = undefined;
    /**
    * @member {String} expires_at
    */
    'expires_at' = undefined;
    /**
    * @member {module:model/AccessToken.TokenTypeEnum} token_type
    */
    'token_type' = undefined;



    /**
    * Allowed values for the <code>token_type</code> property.
    * @enum {String}
    * @readonly
    */
    static TokenTypeEnum = {
        /**
         * value: "Bearer"
         * @const
         */
        "Bearer": "Bearer"    };

}
