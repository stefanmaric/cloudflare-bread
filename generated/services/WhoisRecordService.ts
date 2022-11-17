/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { whois_components_schemas_single_response } from '../models/whois_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WhoisRecordService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get WHOIS Record
     * @returns whois_components_schemas_single_response Get WHOIS Record response
     * @throws ApiError
     */
    public whoisRecordGetWhoisRecord({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<whois_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/whois',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
