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
* The ActuateDeviceBody model module.
* @module model/ActuateDeviceBody
* @version 1.1.1-beta2
*/
export default class ActuateDeviceBody {
    /**
    * Constructs a new <code>ActuateDeviceBody</code>.
    * @alias module:model/ActuateDeviceBody
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ActuateDeviceBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActuateDeviceBody} obj Optional instance to populate.
    * @return {module:model/ActuateDeviceBody} The populated <code>ActuateDeviceBody</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActuateDeviceBody();
                        
            
            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * the property to alter
    * @member {String} property
    */
    'property' = undefined;
    /**
    * the value to set for the property
    * @member {String} value
    */
    'value' = undefined;




}