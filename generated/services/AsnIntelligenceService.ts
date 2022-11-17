/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { asn_components_schemas_asn } from '../models/asn_components_schemas_asn';
import type { asn_components_schemas_response } from '../models/asn_components_schemas_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_asn } from '../models/components_schemas_asn';
import type { page } from '../models/page';
import type { per_page } from '../models/per_page';
import type { schemas_count } from '../models/schemas_count';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AsnIntelligenceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get ASN Overview
     * @returns asn_components_schemas_response Get ASN Overview response
     * @throws ApiError
     */
    public asnIntelligenceGetAsnOverview({
        asn,
        accountIdentifier,
    }: {
        asn: asn_components_schemas_asn,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<asn_components_schemas_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/asn/{asn}',
            path: {
                'asn': asn,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get ASN Subnets
     * @returns any Get ASN Subnets response
     * @throws ApiError
     */
    public asnIntelligenceGetAsnSubnets({
        asn,
        accountIdentifier,
    }: {
        asn: asn_components_schemas_asn,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<{
        asn?: components_schemas_asn;
        count?: schemas_count;
        ip_count_total?: number;
        page?: page;
        per_page?: per_page;
        subnets?: Array<string>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/asn/{asn}/subnets',
            path: {
                'asn': asn,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
