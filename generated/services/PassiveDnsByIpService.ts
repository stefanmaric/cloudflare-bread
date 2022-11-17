/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { passive_dns_by_ip_components_schemas_single_response } from '../models/passive_dns_by_ip_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PassiveDnsByIpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Passive DNS by IP
     * @returns passive_dns_by_ip_components_schemas_single_response Get Passive DNS by IP response
     * @throws ApiError
     */
    public passiveDnsByIpGetPassiveDnsByIp({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<passive_dns_by_ip_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/dns',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
