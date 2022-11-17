/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { deployment_list_response } from '../models/deployment_list_response';
import type { deployment_new_deployment } from '../models/deployment_new_deployment';
import type { deployment_response_details } from '../models/deployment_response_details';
import type { deployment_response_logs } from '../models/deployment_response_logs';
import type { deployment_response_stage_logs } from '../models/deployment_response_stage_logs';
import type { deployment_stage_name } from '../models/deployment_stage_name';
import type { project_name } from '../models/project_name';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PagesDeploymentService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get deployments
     * Fetch a list of deployments from a project.
     * @returns deployment_list_response Get deployments response
     * @throws ApiError
     */
    public pagesDeploymentGetDeployments({
        projectName,
        accountIdentifier,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<deployment_list_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create deployment
     * Start a new deployment from production. The repo/account must have been authorized through the Pages UI dash before.
     * @returns deployment_new_deployment Create deployment response
     * @throws ApiError
     */
    public pagesDeploymentCreateDeployment({
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<deployment_new_deployment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete deployment
     * Destroy a deployment.
     * @returns any Delete deployment response
     * @throws ApiError
     */
    public pagesDeploymentDeleteDeployment({
        deploymentIdentifier,
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        deploymentIdentifier: common_components_schemas_identifier,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}',
            path: {
                'deployment_identifier': deploymentIdentifier,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get deployment info
     * Fetch a deployment.
     * @returns deployment_response_details Get deployment info response
     * @throws ApiError
     */
    public pagesDeploymentGetDeploymentInfo({
        deploymentIdentifier,
        projectName,
        accountIdentifier,
    }: {
        deploymentIdentifier: common_components_schemas_identifier,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<deployment_response_details> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}',
            path: {
                'deployment_identifier': deploymentIdentifier,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get deployment logs
     * Fetch deploy logs.
     * @returns deployment_response_logs Get deployment logs response
     * @throws ApiError
     */
    public pagesDeploymentGetDeploymentLogs({
        deploymentIdentifier,
        projectName,
        accountIdentifier,
    }: {
        deploymentIdentifier: common_components_schemas_identifier,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<deployment_response_logs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/history/logs',
            path: {
                'deployment_identifier': deploymentIdentifier,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Get deployment stage logs
     * Fetch deploy logs.
     * @returns deployment_response_stage_logs Get deployment stage logs response
     * @throws ApiError
     */
    public pagesDeploymentGetDeploymentStageLogs({
        deploymentStageName,
        deploymentIdentifier,
        projectName,
        accountIdentifier,
    }: {
        deploymentStageName: deployment_stage_name,
        deploymentIdentifier: common_components_schemas_identifier,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<deployment_response_stage_logs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/history/{deployment_stage_name}/logs',
            path: {
                'deployment_stage_name': deploymentStageName,
                'deployment_identifier': deploymentIdentifier,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Retry deployment
     * Retry a previous deployment.
     * @returns deployment_new_deployment Retry deployment response
     * @throws ApiError
     */
    public pagesDeploymentRetryDeployment({
        deploymentIdentifier,
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        deploymentIdentifier: common_components_schemas_identifier,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<deployment_new_deployment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/retry',
            path: {
                'deployment_identifier': deploymentIdentifier,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Rollback deployment
     * Rollback the production deployment to a previous deploy. You can only rollback to succesful builds on production.
     * @returns deployment_response_details Rollback deployment response
     * @throws ApiError
     */
    public pagesDeploymentRollbackDeployment({
        deploymentIdentifier,
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        deploymentIdentifier: common_components_schemas_identifier,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<deployment_response_details> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/rollback',
            path: {
                'deployment_identifier': deploymentIdentifier,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
