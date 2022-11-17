/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { device_posture_integrations_components_schemas_id_response } from '../models/device_posture_integrations_components_schemas_id_response';
import type { device_posture_integrations_components_schemas_identifier } from '../models/device_posture_integrations_components_schemas_identifier';
import type { device_posture_integrations_components_schemas_response_collection } from '../models/device_posture_integrations_components_schemas_response_collection';
import type { device_posture_integrations_components_schemas_single_response } from '../models/device_posture_integrations_components_schemas_single_response';
import type { device_posture_integrations_components_schemas_uuid } from '../models/device_posture_integrations_components_schemas_uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DevicePostureIntegrationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Device Posture Integrations
     * List Device Posture Integrations for an account.
     * @returns device_posture_integrations_components_schemas_response_collection List Device Posture Integrations response
     * @throws ApiError
     */
    public devicePostureIntegrationsListDevicePostureIntegrations({
        identifier,
    }: {
        identifier: device_posture_integrations_components_schemas_identifier,
    }): CancelablePromise<device_posture_integrations_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/posture/integration',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Device Posture Integration
     * Create a new Device Posture Integration.
     * @returns device_posture_integrations_components_schemas_single_response Create Device Posture Integration response
     * @throws ApiError
     */
    public devicePostureIntegrationsCreateDevicePostureIntegration({
        identifier,
        requestBody,
    }: {
        identifier: device_posture_integrations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_posture_integrations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/devices/posture/integration',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Device Posture Integration
     * Delete a Device Posture Integration.
     * @returns device_posture_integrations_components_schemas_id_response Delete Device Posture Integration response
     * @throws ApiError
     */
    public devicePostureIntegrationsDeleteDevicePostureIntegration({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: device_posture_integrations_components_schemas_uuid,
        identifier: device_posture_integrations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_posture_integrations_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/devices/posture/integration/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Device Posture Integration Details
     * Fetch a single Device Posture Integration.
     * @returns device_posture_integrations_components_schemas_single_response Device Posture Integration Details response
     * @throws ApiError
     */
    public devicePostureIntegrationsDevicePostureIntegrationDetails({
        uuid,
        identifier,
    }: {
        uuid: device_posture_integrations_components_schemas_uuid,
        identifier: device_posture_integrations_components_schemas_identifier,
    }): CancelablePromise<device_posture_integrations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/posture/integration/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Device Posture Integration
     * Update a Device Posture Integration.
     * @returns device_posture_integrations_components_schemas_single_response Update Device Posture Integration response
     * @throws ApiError
     */
    public devicePostureIntegrationsUpdateDevicePostureIntegration({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: device_posture_integrations_components_schemas_uuid,
        identifier: device_posture_integrations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_posture_integrations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{identifier}/devices/posture/integration/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
