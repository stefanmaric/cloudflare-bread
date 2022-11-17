/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { patch } from '../models/patch';
import type { schemas_response_single } from '../models/schemas_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ArgoSmartRoutingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Argo Smart Routing setting
     * @returns schemas_response_single Get Argo Smart Routing setting response
     * @throws ApiError
     */
    public argoSmartRoutingGetArgoSmartRoutingSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/argo/smart_routing',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Patch Argo Smart Routing setting
     * Updates enablement of Argo Smart Routing.
     * @returns schemas_response_single Patch Argo Smart Routing setting response
     * @throws ApiError
     */
    public argoSmartRoutingPatchArgoSmartRoutingSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: patch,
    }): CancelablePromise<schemas_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/argo/smart_routing',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
