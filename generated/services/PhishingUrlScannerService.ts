/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { phishing_components_schemas_single_response } from '../models/phishing_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PhishingUrlScannerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Scan suspicious url
     * @returns phishing_components_schemas_single_response Scan suspicious url response
     * @throws ApiError
     */
    public phishingUrlScannerScanSuspiciousUrl({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<phishing_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel-phishing/predict',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
