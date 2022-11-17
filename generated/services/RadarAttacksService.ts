/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarAttacksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a summary of layer 3 attacks
     * Percentage distribution of network protocols in layer 3/4 attacks.
     * @returns any Get a summary of layer 3 attacks response
     * @throws ApiError
     */
    public radarAttacksGetASummaryOfLayer3Attacks(): CancelablePromise<{
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
            summary_0?: {
                gre?: string;
                icmp?: string;
                tcp?: string;
                udp?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer3/summary',
        });
    }

    /**
     * Get layer 3 attacks time series
     * Get layer 3/4 attacks change over time. Values are normalized using min-max by default, with the minimum set to 0. When asking for multiple time series, you can also get the percentual relative change of the 1st/main series, with respect to the 2nd/control series - for example, to get the relative change of this week from the previous week, the 1st series would have a date range of 7d, the 2nd, a date range of 7dControl, and the normalization would be set to PERCENTAGE_CHANGE.
     * @returns any Get layer 3 attacks time series response
     * @throws ApiError
     */
    public radarAttacksGetLayer3AttacksTimeSeries(): CancelablePromise<{
        result?: {
            meta?: {
                aggInterval?: string;
                confidenceInfo?: {
                    /**
                     * Adjusted end of date range.
                     */
                    endTime?: string;
                    /**
                     * Adjusted start of date range.
                     */
                    startTime?: string;
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
            url: '/radar/attacks/layer3/timeseries',
        });
    }

    /**
     * Get layer 3 attacks by network protocol, over time
     * Get percentage of what type of network protocols are used in layer 3/4 attacks, over time.
     * @returns any Get layer 3 attacks by network protocol, over time response
     * @throws ApiError
     */
    public radarAttacksGetLayer3AttacksByNetworkProtocolOverTime(): CancelablePromise<{
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
            serie_0?: {
                gre?: Array<string>;
                icmp?: Array<string>;
                tcp?: Array<string>;
                timeseries?: Array<string>;
                udp?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer3/timeseries_groups',
        });
    }

    /**
     * Get a summary of layer 7 attacks
     * Percentage distribution of mitigation techniques in layer 7 attacks.
     * @returns any Get a summary of layer 7 attacks response
     * @throws ApiError
     */
    public radarAttacksGetASummaryOfLayer7Attacks(): CancelablePromise<{
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
            summary_0?: {
                gre?: string;
                icmp?: string;
                tcp?: string;
                udp?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer7/summary',
        });
    }

    /**
     * Get attacks layer 7 time series
     * Get layer 7 attacks change over time. Values are normalized using min-max by default, with the minimum set to 0. When asking for multiple time series, you can also get the percentage relative change of the first/main series, with respect to the second/control series - for example, to get the relative change of this week from the previous week, the first series would have a date range of `7d`, the second, a date range of `7dControl`, and the normalization would be set to `PERCENTAGE_CHANGE`.
     * @returns any Get attacks layer 7 time series response
     * @throws ApiError
     */
    public radarAttacksGetAttacksLayer7TimeSeries(): CancelablePromise<{
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
            url: '/radar/attacks/layer7/timeseries',
        });
    }

    /**
     * Get layer 7 attacks by mitigation technique, over time
     * Get percentage of what type of mitigation techniques are used to block layer 7 attacks, over time.
     * @returns any Get layer 7 attacks by mitigation technique, over time response
     * @throws ApiError
     */
    public radarAttacksGetLayer7AttacksByMitigationTechniqueOverTime(): CancelablePromise<{
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
            serie_0?: {
                gre?: Array<string>;
                icmp?: Array<string>;
                tcp?: Array<string>;
                timeseries?: Array<string>;
                udp?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer7/timeseries_groups',
        });
    }

    /**
     * Get layer 7 top origin ASes
     * Get the top origin ASes by layer 7 attacks. Values are a percentage out of the total layer 7 attacks. The origin location is determined by the client IP.
     * @returns any Get layer 7 top origin ASes response
     * @throws ApiError
     */
    public radarAttacksGetLayer7TopOriginASes(): CancelablePromise<{
        result?: {
            top_0?: Array<{
                originAsn?: number;
                originAsnName?: string;
                rank?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer7/top/ases/origin',
        });
    }

    /**
     * Get layer 7 top attack pairs (origin and target locations)
     * Get the top attacks from origin to target location. Values are a percentage out of the total layer 7 attacks (with billing country). The attack magnitude can be defined by the number of mitigated requests or by the number of zones affected. You can optionally limit the number of attacks per origin/target location (useful if all the top attacks are from or to the same location).
     * @returns any Get layer 7 top attack pairs (origin and target locations) response
     * @throws ApiError
     */
    public radarAttacksGetLayer7TopAttackPairsOriginAndTargetLocations(): CancelablePromise<{
        result?: {
            top_0?: Array<{
                originCountryAlpha2?: string;
                originCountryName?: string;
                rank?: string;
                targetCountryAlpha2?: string;
                targetCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer7/top/attacks',
        });
    }

    /**
     * Get layer 7 top origin locations
     * Get the top origin locations of and by layer 7 attacks. Values are a percentage out of the total layer 7 attacks. The origin location is determined by the client IP.
     * @returns any Get layer 7 top origin locations response
     * @throws ApiError
     */
    public radarAttacksGetLayer7TopOriginLocations(): CancelablePromise<{
        result?: {
            top_0?: Array<{
                originCountryAlpha2?: string;
                originCountryName?: string;
                rank?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer7/top/locations/origin',
        });
    }

    /**
     * Get layer 7 top target locations
     * Get the top target locations of and by layer 7 attacks. Values are a percentage out of the total layer 7 attacks. The target location is determined by the attacked zone's billing country, when available.
     * @returns any Get layer 7 top target locations response
     * @throws ApiError
     */
    public radarAttacksGetLayer7TopTargetLocations(): CancelablePromise<{
        data?: {
            top_0?: Array<{
                rank?: string;
                targetCountryAlpha2?: string;
                targetCountryName?: string;
                value?: string;
            }>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/attacks/layer7/top/locations/target',
        });
    }

}
