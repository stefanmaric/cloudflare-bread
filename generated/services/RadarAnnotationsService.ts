/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarAnnotationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get outages annotations
     * @returns any Get outages annotations response
     * @throws ApiError
     */
    public radarAnnotationsGetOutagesAnnotations(): CancelablePromise<{
        result?: {
            annotations?: Array<{
                asns?: Array<number>;
                dataSource?: string;
                description?: string;
                endDate?: string;
                eventType?: string;
                linkedUrl?: string;
                locations?: Array<string>;
                outage?: {
                    outageCause?: string;
                    outageType?: string;
                };
                scope?: string;
                startDate?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/annotations/outages',
        });
    }

    /**
     * Get top outages annotations
     * @returns any Get top outages annotations response
     * @throws ApiError
     */
    public radarAnnotationsGetTopOutagesAnnotations(): CancelablePromise<{
        result?: {
            annotations?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/annotations/outages/locations',
        });
    }

}
