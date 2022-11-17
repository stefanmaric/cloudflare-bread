/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_response } from '../models/schemas_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpIntelligenceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get IP Overview
     * @returns schemas_response Get IP Overview response
     * @throws ApiError
     */
    public ipIntelligenceGetIpOverview({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/ip',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
