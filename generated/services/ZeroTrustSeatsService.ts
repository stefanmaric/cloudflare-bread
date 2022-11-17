/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { seats_components_schemas_identifier } from '../models/seats_components_schemas_identifier';
import type { seats_components_schemas_response_collection } from '../models/seats_components_schemas_response_collection';
import type { seats_definition } from '../models/seats_definition';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustSeatsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update a user seat
     * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
     * @returns seats_components_schemas_response_collection Update a user seat response
     * @throws ApiError
     */
    public zeroTrustSeatsUpdateAUserSeat({
        identifier,
        requestBody,
    }: {
        identifier: seats_components_schemas_identifier,
        requestBody: seats_definition,
    }): CancelablePromise<seats_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{identifier}/access/seats',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
