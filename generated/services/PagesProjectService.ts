/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { new_project_response } from '../models/new_project_response';
import type { project_name } from '../models/project_name';
import type { project_patch } from '../models/project_patch';
import type { project_response } from '../models/project_response';
import type { projects } from '../models/projects';
import type { projects_response } from '../models/projects_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PagesProjectService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get projects
     * Fetch a list of all user projects.
     * @returns projects_response Get projects response
     * @throws ApiError
     */
    public pagesProjectGetProjects({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<projects_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create project
     * Make a new project.
     * @returns new_project_response Create project response
     * @throws ApiError
     */
    public pagesProjectCreateProject({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: projects,
    }): CancelablePromise<new_project_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pages/projects',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete project
     * Destroy a project by name.
     * @returns any Delete project response
     * @throws ApiError
     */
    public pagesProjectDeleteProject({
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get project
     * Fetch a project by name.
     * @returns project_response Get project response
     * @throws ApiError
     */
    public pagesProjectGetProject({
        projectName,
        accountIdentifier,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<project_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update project
     * Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
     * @returns new_project_response Update project response
     * @throws ApiError
     */
    public pagesProjectUpdateProject({
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: project_patch,
    }): CancelablePromise<new_project_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
