/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bundle_method } from '../models/bundle_method';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { keyless_certificate_components_schemas_identifier } from '../models/keyless_certificate_components_schemas_identifier';
import type { keyless_certificate_components_schemas_name } from '../models/keyless_certificate_components_schemas_name';
import type { keyless_response_collection } from '../models/keyless_response_collection';
import type { keyless_response_single } from '../models/keyless_response_single';
import type { keyless_response_single_id } from '../models/keyless_response_single_id';
import type { schemas_certificate } from '../models/schemas_certificate';
import type { schemas_enabled } from '../models/schemas_enabled';
import type { schemas_host } from '../models/schemas_host';
import type { schemas_port } from '../models/schemas_port';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class KeylessSslForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Keyless SSL Configurations
     * List all Keyless SSL configurations for a given zone.
     * @returns keyless_response_collection List Keyless SSL Configurations response
     * @throws ApiError
     */
    public keylessSslForAZoneListKeylessSslConfigurations({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<keyless_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/keyless_certificates',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create Keyless SSL Configuration
     * @returns keyless_response_single Create Keyless SSL Configuration response
     * @throws ApiError
     */
    public keylessSslForAZoneCreateKeylessSslConfiguration({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            bundle_method?: bundle_method;
            certificate: schemas_certificate;
            host: schemas_host;
            name?: keyless_certificate_components_schemas_name;
            port: schemas_port;
        },
    }): CancelablePromise<keyless_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/keyless_certificates',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Keyless SSL Configuration
     * @returns keyless_response_single_id Delete Keyless SSL Configuration response
     * @throws ApiError
     */
    public keylessSslForAZoneDeleteKeylessSslConfiguration({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: keyless_certificate_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<keyless_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/keyless_certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Keyless SSL Configuration
     * Get details for one Keyless SSL configuration.
     * @returns keyless_response_single Get Keyless SSL Configuration response
     * @throws ApiError
     */
    public keylessSslForAZoneGetKeylessSslConfiguration({
        identifier,
        zoneIdentifier,
    }: {
        identifier: keyless_certificate_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<keyless_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/keyless_certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit Keyless SSL Configuration
     * This will update attributes of a Keyless SSL. Consists of one or more of the following:  host,name,port,certificate,enabled.
     * @returns keyless_response_single Edit Keyless SSL Configuration response
     * @throws ApiError
     */
    public keylessSslForAZoneEditKeylessSslConfiguration({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: keyless_certificate_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            enabled?: schemas_enabled;
            host?: schemas_host;
            name?: keyless_certificate_components_schemas_name;
            port?: schemas_port;
        },
    }): CancelablePromise<keyless_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/keyless_certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
