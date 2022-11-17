/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { device_posture_rules_components_schemas_id_response } from '../models/device_posture_rules_components_schemas_id_response';
import type { device_posture_rules_components_schemas_identifier } from '../models/device_posture_rules_components_schemas_identifier';
import type { device_posture_rules_components_schemas_response_collection } from '../models/device_posture_rules_components_schemas_response_collection';
import type { device_posture_rules_components_schemas_single_response } from '../models/device_posture_rules_components_schemas_single_response';
import type { device_posture_rules_components_schemas_uuid } from '../models/device_posture_rules_components_schemas_uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DevicePostureRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Device Posture Rules
     * List Device Posture Rules for an account.
     * @returns device_posture_rules_components_schemas_response_collection List Device Posture Rules response
     * @throws ApiError
     */
    public devicePostureRulesListDevicePostureRules({
        identifier,
    }: {
        identifier: device_posture_rules_components_schemas_identifier,
    }): CancelablePromise<device_posture_rules_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/posture',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Device Posture Rule
     * Create a new Device Posture Rule.
     * @returns device_posture_rules_components_schemas_single_response Create Device Posture Rule response
     * @throws ApiError
     */
    public devicePostureRulesCreateDevicePostureRule({
        identifier,
        requestBody,
    }: {
        identifier: device_posture_rules_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_posture_rules_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/devices/posture',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Device Posture Rule
     * Delete a Device Posture Rule.
     * @returns device_posture_rules_components_schemas_id_response Delete Device Posture Rule response
     * @throws ApiError
     */
    public devicePostureRulesDeleteDevicePostureRule({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: device_posture_rules_components_schemas_uuid,
        identifier: device_posture_rules_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_posture_rules_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/devices/posture/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Device Posture Rules Details
     * Fetch a single Device Posture Rule.
     * @returns device_posture_rules_components_schemas_single_response Device Posture Rules Details response
     * @throws ApiError
     */
    public devicePostureRulesDevicePostureRulesDetails({
        uuid,
        identifier,
    }: {
        uuid: device_posture_rules_components_schemas_uuid,
        identifier: device_posture_rules_components_schemas_identifier,
    }): CancelablePromise<device_posture_rules_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/posture/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Device Posture Rule
     * Update a Device Posture Rule.
     * @returns device_posture_rules_components_schemas_single_response Update Device Posture Rule response
     * @throws ApiError
     */
    public devicePostureRulesUpdateDevicePostureRule({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: device_posture_rules_components_schemas_uuid,
        identifier: device_posture_rules_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_posture_rules_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/posture/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
