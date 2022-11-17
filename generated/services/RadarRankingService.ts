/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarRankingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Domains Rank time series
     * Gets Domains Rank updates change over time. Raw values are returned.
     * @returns any Get Domains Rank time series response
     * @throws ApiError
     */
    public radarRankingGetDomainsRankTimeSeries(): CancelablePromise<{
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
            serie_0?: {
                '<domain name>'?: Array<number>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/ranking/timeseries',
        });
    }

    /**
     * Get Domains Rank top
     * Gets Top Domains Rank globally or by country.
     * @returns any Get Domains Rank top response
     * @throws ApiError
     */
    public radarRankingGetDomainsRankTop(): CancelablePromise<{
        result?: {
            meta?: {
                top_0?: {
                    date?: string;
                };
            };
            top_0?: Array<{
                domain?: string;
                rank?: number;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/ranking/top',
        });
    }

}
