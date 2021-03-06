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
* Enum class DeviceType.
* @enum {}
* @readonly
*/
export default class DeviceType {
        /**
         * value: "button"
         * @const
         */
        button = "button";

        /**
         * value: "contact"
         * @const
         */
        contact = "contact";

        /**
         * value: "motion"
         * @const
         */
        motion = "motion";

        /**
         * value: "lamp"
         * @const
         */
        lamp = "lamp";

        /**
         * value: "doorlock"
         * @const
         */
        doorlock = "doorlock";

        /**
         * value: "audio"
         * @const
         */
        audio = "audio";


    /**
    * Returns a <code>DeviceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeviceType} The enum <code>DeviceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
