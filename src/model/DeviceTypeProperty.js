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
* The DeviceTypeProperty model module.
* @module model/DeviceTypeProperty
* @version 1.1.1-beta2
*/
export default class DeviceTypeProperty {
    /**
    * Constructs a new <code>DeviceTypeProperty</code>.
    * @alias module:model/DeviceTypeProperty
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DeviceTypeProperty</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DeviceTypeProperty} obj Optional instance to populate.
    * @return {module:model/DeviceTypeProperty} The populated <code>DeviceTypeProperty</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTypeProperty();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('enumValues')) {
                obj['enumValues'] = ApiClient.convertToType(data['enumValues'], ['String']);
            }
            if (data.hasOwnProperty('readable')) {
                obj['readable'] = ApiClient.convertToType(data['readable'], 'Boolean');
            }
            if (data.hasOwnProperty('writable')) {
                obj['writable'] = ApiClient.convertToType(data['writable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/DeviceTypeProperty.TypeEnum} type
    */
    'type' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} unit
    */
    'unit' = undefined;
    /**
    * @member {Array.<String>} enumValues
    */
    'enumValues' = undefined;
    /**
    * @member {Boolean} readable
    */
    'readable' = undefined;
    /**
    * @member {Boolean} writable
    */
    'writable' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "Enum"
         * @const
         */
        "Enum": "Enum",
        /**
         * value: "Boolean"
         * @const
         */
        "Boolean": "Boolean",
        /**
         * value: "Number"
         * @const
         */
        "Number": "Number",
        /**
         * value: "String"
         * @const
         */
        "String": "String"    };

}
