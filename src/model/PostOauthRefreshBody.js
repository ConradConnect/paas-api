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
* The PostOauthRefreshBody model module.
* @module model/PostOauthRefreshBody
* @version 1.1.1-beta2
*/
export default class PostOauthRefreshBody {
    /**
    * Constructs a new <code>PostOauthRefreshBody</code>.
    * @alias module:model/PostOauthRefreshBody
    * @class
    * @param grantType {module:model/PostOauthRefreshBody.GrantTypeEnum} 
    */

    constructor(grantType) {
        
        
        this['grant_type'] = grantType;
        
    }

    /**
    * Constructs a <code>PostOauthRefreshBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PostOauthRefreshBody} obj Optional instance to populate.
    * @return {module:model/PostOauthRefreshBody} The populated <code>PostOauthRefreshBody</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostOauthRefreshBody();
                        
            
            if (data.hasOwnProperty('grant_type')) {
                obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/PostOauthRefreshBody.GrantTypeEnum} grant_type
    */
    'grant_type' = undefined;
    /**
    * @member {String} refresh_token
    */
    'refresh_token' = undefined;



    /**
    * Allowed values for the <code>grant_type</code> property.
    * @enum {String}
    * @readonly
    */
    static GrantTypeEnum = {
        /**
         * value: "refresh_token"
         * @const
         */
        "token": "refresh_token"    };

}
