/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarVerifiedBotsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get top verified bots by HTTP requests
     * Get top verified bots by HTTP requests, with owner and category.
     * @returns any Get top verified bots by HTTP requests response
     * @throws ApiError
     */
    public radarVerifiedBotsGetTopVerifiedBotsByHttpRequests(): CancelablePromise<{
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
                botCategory?: string;
                botName?: string;
                botOwner?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/verified_bots/top/bots',
        });
    }

    /**
     * Get top verified bot categories by HTTP requests
     * Get top verified bot categories by HTTP requests, along with their corresponding percentage, over the total verified bot HTTP requests.
     * @returns any Get top verified bot categories by HTTP requests response
     * @throws ApiError
     */
    public radarVerifiedBotsGetTopVerifiedBotCategoriesByHttpRequests(): CancelablePromise<{
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
                botCategory?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/verified_bots/top/categories',
        });
    }

}
