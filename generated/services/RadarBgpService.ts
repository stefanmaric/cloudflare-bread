/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarBgpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get BGP time series
     * Gets BGP updates change over time. Raw values are returned. When requesting updates of an autonomous system (AS), only BGP updates of type announcement are returned.
     * @returns any Get BGP time series response
     * @throws ApiError
     */
    public radarBgpGetBgpTimeSeries(): CancelablePromise<{
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
            url: '/radar/bgp/timeseries',
        });
    }

    /**
     * Get top autonomous systems
     * Get the top autonomous systems (AS) by BGP updates (announcements only). Values are a percentage out of the total updates.
     * @returns any Get top autonomous systems response
     * @throws ApiError
     */
    public radarBgpGetTopAutonomousSystems(): CancelablePromise<{
        result?: {
            meta?: {
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
            };
            top_0?: Array<{
                ASName?: string;
                asn?: string;
                /**
                 * Percentage of updates by this AS out of the total updates by all autonomous systems.
                 */
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/bgp/top/ases',
        });
    }

    /**
     * Get top prefixes
     * Get the top network prefixes by BGP updates. Values are a percentage out of the total BGP updates.
     * @returns any Get top prefixes response
     * @throws ApiError
     */
    public radarBgpGetTopPrefixes(): CancelablePromise<{
        result?: {
            meta?: {
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
            };
            top_0?: Array<{
                prefix?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/bgp/top/prefixes',
        });
    }

}
