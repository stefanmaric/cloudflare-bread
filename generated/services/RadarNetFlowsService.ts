/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarNetFlowsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get NetFlow time series
     * Get network traffic change over time. Values are normalized using min-max by default, with the minimum set to 0. When asking for multiple time series, you can also get the percentage relative change of the first/main series, with respect to the second/control series - for example, to get the relative change of this week from the previous week, the first series would have a date range of `7d`, the second, a date range of `7dControl`, and the normalization would be set to `PERCENTAGE_CHANGE`.
     * @returns any Get NetFlow time series response
     * @throws ApiError
     */
    public radarNetFlowsGetNetFlowTimeSeries(): CancelablePromise<{
        result?: {
            meta?: {
                aggInterval?: string;
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    /**
                     * Adjusted end of date range.
                     */
                    endTime?: string;
                    /**
                     * Adjusted start of date range.
                     */
                    startTime?: string;
                };
                lastUpdated?: string;
            };
            series?: {
                timestamps?: Array<string>;
                values?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/netflows/timeseries',
        });
    }

    /**
     * Get top autonomous systems
     * Get the top autonomous systems (AS) by network traffic. Values are a percentage out of the total network traffic.
     * @returns any Get top autonomous systems response
     * @throws ApiError
     */
    public radarNetFlowsGetTopAutonomousSystems(): CancelablePromise<{
        result?: {
            top_0?: Array<{
                clientASN?: number;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/netflows/top/ases',
        });
    }

    /**
     * Get top locations
     * Get the top locations by network traffic. Values are a percentage out of the total network traffic.
     * @returns any Get top locations response
     * @throws ApiError
     */
    public radarNetFlowsGetTopLocations(): CancelablePromise<{
        result?: {
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/netflows/top/locations',
        });
    }

}
