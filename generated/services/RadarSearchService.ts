/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarSearchService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search for locations, autonomous systems (AS) and reports
     * Lets you search for locations, autonomous systems (AS) and reports.
     * @returns any Search for locations, autonomous systems (AS) and reports response
     * @throws ApiError
     */
    public radarSearchSearchForLocationsAutonomousSystemsAsAndReports(): CancelablePromise<{
        result?: Array<{
            code?: string;
            name?: string;
            type?: string;
        }>;
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/search/global',
        });
    }

}
