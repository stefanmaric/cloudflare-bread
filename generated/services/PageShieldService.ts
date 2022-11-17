/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { get_zone_connection_response } from '../models/get_zone_connection_response';
import type { get_zone_script_response } from '../models/get_zone_script_response';
import type { list_zone_connections_response } from '../models/list_zone_connections_response';
import type { list_zone_scripts_response } from '../models/list_zone_scripts_response';
import type { script_monitor_components_schemas_id } from '../models/script_monitor_components_schemas_id';
import type { zone_settings_response_single } from '../models/zone_settings_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PageShieldService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Page Shield settings
     * Fetches the Page Shield settings.
     * @returns any Get Page Shield settings response
     * @throws ApiError
     */
    public pageShieldGetPageShieldSettings({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/page_shield',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update Page Shield settings
     * Updates Page Shield settings.
     * @returns any Update Page Shield settings response
     * @throws ApiError
     */
    public pageShieldUpdatePageShieldSettings({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/page_shield',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Page Shield connections
     * Lists all connections detected by Page Shield.
     * @returns list_zone_connections_response List Page Shield connections response
     * @throws ApiError
     */
    public pageShieldListPageShieldConnections({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<list_zone_connections_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/page_shield/connections',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Get a Page Shield connection
     * Fetches a connection detected by Page Shield by connection ID.
     * @returns get_zone_connection_response Get a Page Shield connection response
     * @throws ApiError
     */
    public pageShieldGetAPageShieldConnection({
        id,
        zoneId,
    }: {
        id: script_monitor_components_schemas_id,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<get_zone_connection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/page_shield/connections/{id}',
            path: {
                'id': id,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * List Page Shield scripts
     * Lists all scripts detected by Page Shield.
     * @returns list_zone_scripts_response List Page Shield scripts response
     * @throws ApiError
     */
    public pageShieldListPageShieldScripts({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<list_zone_scripts_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/page_shield/scripts',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Get a Page Shield script
     * Fetches a script detected by Page Shield by script ID.
     * @returns get_zone_script_response Get a Page Shield script response
     * @throws ApiError
     */
    public pageShieldGetAPageShieldScript({
        id,
        zoneId,
    }: {
        id: script_monitor_components_schemas_id,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<get_zone_script_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/page_shield/scripts/{id}',
            path: {
                'id': id,
                'zone_id': zoneId,
            },
        });
    }

}
