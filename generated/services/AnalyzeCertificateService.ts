/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bundle_method } from '../models/bundle_method';
import type { certificate } from '../models/certificate';
import type { certificate_analyze_response } from '../models/certificate_analyze_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AnalyzeCertificateService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Analyze Certificate
     * Returns the set of hostnames, the signature algorithm, and the expiration date of the certificate.
     * @returns certificate_analyze_response Analyze Certificate response
     * @throws ApiError
     */
    public analyzeCertificateAnalyzeCertificate({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: {
            bundle_method?: bundle_method;
            certificate?: certificate;
        },
    }): CancelablePromise<certificate_analyze_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/ssl/analyze',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
