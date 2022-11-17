/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { audit_logs_response_collection } from '../models/audit_logs_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuditLogsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get account audit logs
     * Gets a list of audit logs for an account. The list can be filtered by who made the change, which zone was the change made on, and the timeframe of the change.
     * @returns audit_logs_response_collection Get account audit logs response
     * @throws ApiError
     */
    public auditLogsGetAccountAuditLogs({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<audit_logs_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/audit_logs',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Get organization audit logs
     * Gets a list of audit logs for an organization. The list can be filtered by who made the change, which zone was the change made on, and the timeframe of the change.
     * @returns audit_logs_response_collection Get organization audit logs response
     * @throws ApiError
     */
    public auditLogsGetOrganizationAuditLogs({
        organizationIdentifier,
    }: {
        organizationIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<audit_logs_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/audit_logs',
            path: {
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * Get user audit logs
     * Gets a list of audit logs for a user account. The list can be filtered by who made the change, which zone was the change made on, and the timeframe of the change.
     * @returns audit_logs_response_collection Get user audit logs response
     * @throws ApiError
     */
    public auditLogsGetUserAuditLogs(): CancelablePromise<audit_logs_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/audit_logs',
        });
    }

}
