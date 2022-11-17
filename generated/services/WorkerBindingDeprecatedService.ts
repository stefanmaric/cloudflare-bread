/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_common } from '../models/api_response_common';
import type { binding } from '../models/binding';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerBindingDeprecatedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Bindings
     * List the bindings for a Workers script.
     * @returns any List Bindings response
     * @throws ApiError
     */
    public workerBindingDeprecatedListBindings({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_common & {
        result?: Array<binding>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/workers/script/bindings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
