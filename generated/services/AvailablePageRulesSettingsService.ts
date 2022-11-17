/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { pagerule_settings_response_collection } from '../models/pagerule_settings_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AvailablePageRulesSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List available Page Rules settings
     * Returns a list of settings (and their details) that Page Rules can apply to matching requests.
     * @returns pagerule_settings_response_collection List available Page Rules settings response
     * @throws ApiError
     */
    public availablePageRulesSettingsListAvailablePageRulesSettings({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pagerule_settings_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/pagerules/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
