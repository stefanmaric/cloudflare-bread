/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_id_response } from '../models/components_schemas_id_response';
import type { components_schemas_single_response } from '../models/components_schemas_single_response';
import type { schemas_account_identifier } from '../models/schemas_account_identifier';
import type { tsig } from '../models/tsig';
import type { tsig_components_schemas_identifier } from '../models/tsig_components_schemas_identifier';
import type { tsig_components_schemas_response_collection } from '../models/tsig_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecondaryDnsTsigService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List TSIGs
     * List TSIGs.
     * @returns tsig_components_schemas_response_collection List TSIGs response
     * @throws ApiError
     */
    public secondaryDnsTsigListTsiGs({
        accountIdentifier,
    }: {
        accountIdentifier: schemas_account_identifier,
    }): CancelablePromise<tsig_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/secondary_dns/tsigs',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create TSIG
     * Create TSIG.
     * @returns components_schemas_single_response Create TSIG response
     * @throws ApiError
     */
    public secondaryDnsTsigCreateTsig({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/secondary_dns/tsigs',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete TSIG
     * Delete TSIG.
     * @returns components_schemas_id_response Delete TSIG response
     * @throws ApiError
     */
    public secondaryDnsTsigDeleteTsig({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: tsig_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/secondary_dns/tsigs/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * TSIG Details
     * Get TSIG.
     * @returns components_schemas_single_response TSIG Details response
     * @throws ApiError
     */
    public secondaryDnsTsigTsigDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: tsig_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
    }): CancelablePromise<components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/secondary_dns/tsigs/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update TSIG
     * Modify TSIG.
     * @returns components_schemas_single_response Update TSIG response
     * @throws ApiError
     */
    public secondaryDnsTsigUpdateTsig({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: tsig_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
        requestBody: tsig,
    }): CancelablePromise<components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/secondary_dns/tsigs/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
