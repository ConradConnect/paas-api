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
* The SubscribeToDeviceEventBody model module.
* @module model/SubscribeToDeviceEventBody
* @version 1.1.1-beta2
*/
export default class SubscribeToDeviceEventBody {
    /**
    * Constructs a new <code>SubscribeToDeviceEventBody</code>.
    * @alias module:model/SubscribeToDeviceEventBody
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SubscribeToDeviceEventBody</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscribeToDeviceEventBody} obj Optional instance to populate.
    * @return {module:model/SubscribeToDeviceEventBody} The populated <code>SubscribeToDeviceEventBody</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscribeToDeviceEventBody();
                        
            
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], ['String']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], 'Number');
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
    * Event trigger of the device
    * @member {Array.<String>} triggers
    */
    'triggers' = undefined;
    /**
    * event to subscribe to (from GET /device)
    * @member {String} event
    */
    'event' = undefined;
    /**
    * token of the user who the action will be called for
    * @member {String} token
    */
    'token' = undefined;
    /**
    * The lower bound of an event that has a numeric number, if none set than Infinity/-Inifinity
    * @member {Number} lt
    */
    'lt' = undefined;
    /**
    * The lower bound of an event that has a numeric number, if none set than Infinity/-Inifinity
    * @member {Number} gt
    */
    'gt' = undefined;
    /**
    * The callback url which will receive the message each time the device triggers the event, if none set then will be sent to mydaco API.
    * @member {String} url
    */
    'url' = undefined;




}