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
* The CreateUserBody model module.
* @module model/CreateUserBody
* @version 1.1.1-beta2
*/
export default class CreateUserBody {
    /**
    * Constructs a new <code>CreateUserBody</code>.
    * @alias module:model/CreateUserBody
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateUserBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateUserBody} obj Optional instance to populate.
    * @return {module:model/CreateUserBody} The populated <code>CreateUserBody</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserBody();
                        
            
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    'email' = undefined;
    /**
    * @member {String} firstName
    */
    'firstName' = undefined;
    /**
    * @member {module:model/CreateUserBody.LanguageEnum} language
    */
    'language' = undefined;
    /**
    * @member {String} lastName
    */
    'lastName' = undefined;
    /**
    * @member {String} password
    */
    'password' = undefined;



    /**
    * Allowed values for the <code>language</code> property.
    * @enum {String}
    * @readonly
    */
    static LanguageEnum = {
        /**
         * value: "de"
         * @const
         */
        "de": "de",
        /**
         * value: "en"
         * @const
         */
        "en": "en"    };

}
