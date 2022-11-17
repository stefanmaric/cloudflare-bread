/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { traceroute_response_collection } from '../models/traceroute_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DiagnosticsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Traceroute
     * Run traceroutes from Cloudflare colos.
     * @returns traceroute_response_collection Traceroute response
     * @throws ApiError
     */
    public diagnosticsTraceroute({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<traceroute_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/diagnostics/traceroute',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
