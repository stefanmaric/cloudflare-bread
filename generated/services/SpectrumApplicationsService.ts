/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { app_components_schemas_response_collection } from '../models/app_components_schemas_response_collection';
import type { app_id } from '../models/app_id';
import type { argo_smart_routing } from '../models/argo_smart_routing';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { dns } from '../models/dns';
import type { edge_ips } from '../models/edge_ips';
import type { ip_firewall } from '../models/ip_firewall';
import type { origin_dns } from '../models/origin_dns';
import type { origin_port } from '../models/origin_port';
import type { protocol } from '../models/protocol';
import type { proxy_protocol } from '../models/proxy_protocol';
import type { response_single_origin_dns } from '../models/response_single_origin_dns';
import type { schemas_response_single } from '../models/schemas_response_single';
import type { tls } from '../models/tls';
import type { traffic_type } from '../models/traffic_type';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpectrumApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Spectrum applications
     * Retrieves a list of currently existing Spectrum applications inside a zone.
     * @returns app_components_schemas_response_collection List Spectrum applications response
     * @throws ApiError
     */
    public spectrumApplicationsListSpectrumApplications({
        zone,
    }: {
        zone: common_components_schemas_identifier,
    }): CancelablePromise<app_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone}/spectrum/apps',
            path: {
                'zone': zone,
            },
        });
    }

    /**
     * Create Spectrum application using a name for the origin
     * Creates a new Spectrum application from a configuration using a name for the origin.
     * @returns response_single_origin_dns Create Spectrum application using a name for the origin response
     * @throws ApiError
     */
    public spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin({
        zone,
        requestBody,
    }: {
        zone: common_components_schemas_identifier,
        requestBody: {
            argo_smart_routing?: argo_smart_routing;
            dns: dns;
            edge_ips?: edge_ips;
            ip_firewall?: ip_firewall;
            origin_dns: origin_dns;
            origin_port: origin_port;
            protocol: protocol;
            proxy_protocol?: proxy_protocol;
            tls?: tls;
            traffic_type?: traffic_type;
        },
    }): CancelablePromise<response_single_origin_dns> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone}/spectrum/apps',
            path: {
                'zone': zone,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Spectrum application
     * Deletes a previously existing application.
     * @returns any Delete Spectrum application response
     * @throws ApiError
     */
    public spectrumApplicationsDeleteSpectrumApplication({
        appId,
        zone,
        requestBody,
    }: {
        appId: app_id,
        zone: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(api_response_single & {
        result?: {
            id?: app_id;
        };
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone}/spectrum/apps/{app_id}',
            path: {
                'app_id': appId,
                'zone': zone,
            },
            body: requestBody,
        });
    }

    /**
     * Get Spectrum application configuration
     * Gets the application configuration of a specific application inside a zone.
     * @returns schemas_response_single Get Spectrum application configuration response
     * @throws ApiError
     */
    public spectrumApplicationsGetSpectrumApplicationConfiguration({
        appId,
        zone,
    }: {
        appId: app_id,
        zone: common_components_schemas_identifier,
    }): CancelablePromise<schemas_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone}/spectrum/apps/{app_id}',
            path: {
                'app_id': appId,
                'zone': zone,
            },
        });
    }

    /**
     * Update Spectrum application configuration using a name for the origin
     * Updates a previously existing application's configuration that uses a name for the origin.
     * @returns response_single_origin_dns Update Spectrum application configuration using a name for the origin response
     * @throws ApiError
     */
    public spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin({
        appId,
        zone,
        requestBody,
    }: {
        appId: app_id,
        zone: common_components_schemas_identifier,
        requestBody: {
            argo_smart_routing?: argo_smart_routing;
            dns: dns;
            edge_ips?: edge_ips;
            ip_firewall?: ip_firewall;
            origin_dns: origin_dns;
            origin_port: origin_port;
            protocol: protocol;
            proxy_protocol?: proxy_protocol;
            tls?: tls;
            traffic_type?: traffic_type;
        },
    }): CancelablePromise<response_single_origin_dns> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone}/spectrum/apps/{app_id}',
            path: {
                'app_id': appId,
                'zone': zone,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
