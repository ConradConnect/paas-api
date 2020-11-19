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
import Provider from './Provider';

/**
* The GetProvidersListResponse model module.
* @module model/GetProvidersListResponse
* @version 1.1.1-beta2
*/
export default class GetProvidersListResponse {
    /**
    * Constructs a new <code>GetProvidersListResponse</code>.
    * @alias module:model/GetProvidersListResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetProvidersListResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GetProvidersListResponse} obj Optional instance to populate.
    * @return {module:model/GetProvidersListResponse} The populated <code>GetProvidersListResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProvidersListResponse();
                        
            
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Provider]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/GetProvidersListResponse.ObjectEnum} object
    */
    'object' = undefined;
    /**
    * @member {Array.<module:model/Provider>} data
    */
    'data' = undefined;



    /**
    * Allowed values for the <code>object</code> property.
    * @enum {String}
    * @readonly
    */
    static ObjectEnum = {
        /**
         * value: "list"
         * @const
         */
        "list": "list"    };

}
