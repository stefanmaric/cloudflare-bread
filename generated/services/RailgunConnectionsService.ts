/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { connection_collection_response } from '../models/connection_collection_response';
import type { connection_components_schemas_identifier } from '../models/connection_components_schemas_identifier';
import type { connection_single_id_response } from '../models/connection_single_id_response';
import type { connection_single_request } from '../models/connection_single_request';
import type { connection_single_response } from '../models/connection_single_response';
import type { railgun_components_schemas_identifier } from '../models/railgun_components_schemas_identifier';
import type { schemas_connection } from '../models/schemas_connection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RailgunConnectionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Connections
     * List connections associated with the Railgun.
     * @returns connection_collection_response List Connections response
     * @throws ApiError
     */
    public railgunConnectionsListConnections({
        railgunIdentifier,
        accountIdentifier,
    }: {
        railgunIdentifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<connection_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/railguns/{railgun_identifier}/connections',
            path: {
                'railgun_identifier': railgunIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create connection
     * Associates a zone to the Railgun.
     * @returns connection_single_response Create connection response
     * @throws ApiError
     */
    public railgunConnectionsCreateConnection({
        railgunIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        railgunIdentifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: connection_single_request,
    }): CancelablePromise<connection_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/railguns/{railgun_identifier}/connections',
            path: {
                'railgun_identifier': railgunIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete connection
     * Disable and remove the connection to a zone.
     * @returns connection_single_id_response Delete connection response
     * @throws ApiError
     */
    public railgunConnectionsDeleteConnection({
        identifier,
        railgunIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: connection_components_schemas_identifier,
        railgunIdentifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<connection_single_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/railguns/{railgun_identifier}/connections/{identifier}',
            path: {
                'identifier': identifier,
                'railgun_identifier': railgunIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Connection details
     * Get a connection by ID.
     * @returns connection_single_response Connection details response
     * @throws ApiError
     */
    public railgunConnectionsConnectionDetails({
        identifier,
        railgunIdentifier,
        accountIdentifier,
    }: {
        identifier: connection_components_schemas_identifier,
        railgunIdentifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<connection_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/railguns/{railgun_identifier}/connections/{identifier}',
            path: {
                'identifier': identifier,
                'railgun_identifier': railgunIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update connection
     * Enable or disable a connection.
     * @returns connection_single_response Update connection response
     * @throws ApiError
     */
    public railgunConnectionsUpdateConnection({
        identifier,
        railgunIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: connection_components_schemas_identifier,
        railgunIdentifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: schemas_connection,
    }): CancelablePromise<connection_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/railguns/{railgun_identifier}/connections/{identifier}',
            path: {
                'identifier': identifier,
                'railgun_identifier': railgunIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
