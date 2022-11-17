/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarDnsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get DNS time series
     * Get DNS queries change over time.
     * @returns any Get DNS time series response
     * @throws ApiError
     */
    public radarDnsGetDnsTimeSeries(): CancelablePromise<{
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
            url: '/radar/dns/timeseries',
        });
    }

    /**
     * Get top autonomous systems by DNS queries.
     * Get top autonomous systems by DNS queries made to Cloudflare's public DNS resolver.
     * @returns any Get top autonomous systems by DNS queries. response
     * @throws ApiError
     */
    public radarDnsGetTopAutonomousSystemsByDnsQueries(): CancelablePromise<{
        result?: {
            meta?: {
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
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/dns/top/ases',
        });
    }

    /**
     * Get top locations by DNS queries
     * Get top locations by DNS queries made to Cloudflare's public DNS resolver.
     * @returns any Get top locations by DNS queries response
     * @throws ApiError
     */
    public radarDnsGetTopLocationsByDnsQueries(): CancelablePromise<{
        result?: {
            meta?: {
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
                    endTime?: string;
                    startTime?: string;
                };
            };
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
            url: '/radar/dns/top/locations',
        });
    }

}
