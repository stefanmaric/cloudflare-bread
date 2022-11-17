/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { fields_response } from '../models/fields_response';
import type { flag } from '../models/flag';
import type { flag_response } from '../models/flag_response';
import type { logs } from '../models/logs';
import type { ray_identifier } from '../models/ray_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LogsReceivedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get log retention flag
     * Gets log retention flag for Logpull API.
     * @returns flag_response Get log retention flag response
     * @throws ApiError
     */
    public logsReceivedGetLogRetentionFlag({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<flag_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logs/control/retention/flag',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update log retention flag
     * Updates log retention flag for Logpull API.
     * @returns flag_response Update log retention flag response
     * @throws ApiError
     */
    public logsReceivedUpdateLogRetentionFlag({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            flag: flag;
        },
    }): CancelablePromise<flag_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/logs/control/retention/flag',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get logs RayIDs
     * The `/rayids` api route allows lookups by specific rayid. The rayids route will return zero, one, or more records (ray ids are not unique).
     * @returns logs Get logs RayIDs response
     * @throws ApiError
     */
    public logsReceivedGetLogsRayIDs({
        rayIdentifier,
        zoneIdentifier,
    }: {
        rayIdentifier: ray_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<logs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logs/rayids/{ray_identifier}',
            path: {
                'ray_identifier': rayIdentifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Get logs received
     * The `/received` api route allows customers to retrieve their edge HTTP logs. The basic access pattern is "give me all the logs for zone Z for minute M", where the minute M refers to the time records were received at Cloudflare's central data center. `start` is inclusive, and `end` is exclusive. Because of that, to get all data, at minutely cadence, starting at 10AM, the proper values are: `start=2018-05-20T10:00:00Z&end=2018-05-20T10:01:00Z`, then `start=2018-05-20T10:01:00Z&end=2018-05-20T10:02:00Z` and so on; the overlap will be handled properly.
     * @returns logs Get logs received response
     * @throws ApiError
     */
    public logsReceivedGetLogsReceived({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<logs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logs/received',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * List fields
     * Lists all fields available. The response is json object with key-value pairs, where keys are field names, and values are descriptions.
     * @returns fields_response List fields response
     * @throws ApiError
     */
    public logsReceivedListFields({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<fields_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logs/received/fields',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
