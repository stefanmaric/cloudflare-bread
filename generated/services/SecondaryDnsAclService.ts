/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { acl } from '../models/acl';
import type { acl_components_schemas_id_response } from '../models/acl_components_schemas_id_response';
import type { acl_components_schemas_identifier } from '../models/acl_components_schemas_identifier';
import type { acl_components_schemas_response_collection } from '../models/acl_components_schemas_response_collection';
import type { acl_components_schemas_single_response } from '../models/acl_components_schemas_single_response';
import type { schemas_account_identifier } from '../models/schemas_account_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecondaryDnsAclService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List ACLs
     * List ACLs.
     * @returns acl_components_schemas_response_collection List ACLs response
     * @throws ApiError
     */
    public secondaryDnsAclListAcLs({
        accountIdentifier,
    }: {
        accountIdentifier: schemas_account_identifier,
    }): CancelablePromise<acl_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/secondary_dns/acls',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create ACL
     * Create ACL.
     * @returns acl_components_schemas_single_response Create ACL response
     * @throws ApiError
     */
    public secondaryDnsAclCreateAcl({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<acl_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/secondary_dns/acls',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete ACL
     * Delete ACL.
     * @returns acl_components_schemas_id_response Delete ACL response
     * @throws ApiError
     */
    public secondaryDnsAclDeleteAcl({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: acl_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<acl_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/secondary_dns/acls/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * ACL Details
     * Get ACL.
     * @returns acl_components_schemas_single_response ACL Details response
     * @throws ApiError
     */
    public secondaryDnsAclAclDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: acl_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
    }): CancelablePromise<acl_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/secondary_dns/acls/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update ACL
     * Modify ACL.
     * @returns acl_components_schemas_single_response Update ACL response
     * @throws ApiError
     */
    public secondaryDnsAclUpdateAcl({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: acl_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
        requestBody: acl,
    }): CancelablePromise<acl_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/secondary_dns/acls/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
