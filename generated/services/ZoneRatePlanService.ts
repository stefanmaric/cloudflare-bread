/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { plan_response_collection } from '../models/plan_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneRatePlanService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Available Plans
     * Lists available plans the zone can subscribe to.
     * @returns any List Available Plans response
     * @throws ApiError
     */
    public zoneRatePlanListAvailablePlans({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/available_plans',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Available Plan Details
     * Details of the available plan that the zone can subscribe to.
     * @returns any Available Plan Details response
     * @throws ApiError
     */
    public zoneRatePlanAvailablePlanDetails({
        planIdentifier,
        zoneIdentifier,
    }: {
        planIdentifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/available_plans/{plan_identifier}',
            path: {
                'plan_identifier': planIdentifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * List Available Rate Plans
     * Lists all rate plans the zone can subscribe to.
     * @returns plan_response_collection List Available Rate Plans response
     * @throws ApiError
     */
    public zoneRatePlanListAvailableRatePlans({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<plan_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/available_rate_plans',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
