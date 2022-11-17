/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { categoryAlias } from '../models/categoryAlias';
import type { eventAlias } from '../models/eventAlias';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarSpecialeventsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Special Events
     * Get a list of Special Events.
     * @returns any List Special Events response
     * @throws ApiError
     */
    public radarSpecialeventsListSpecialEvents(): CancelablePromise<{
        result?: {
            specialEvents?: Array<{
                alias?: string;
                categories?: Array<{
                    categoryAlias?: string;
                    location?: string;
                }>;
                description?: string;
                id?: number;
                title?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/specialevents',
        });
    }

    /**
     * Get a Single Special Events
     * Get a single Special Event.
     * @returns any Get a Single Special Events response
     * @throws ApiError
     */
    public radarSpecialeventsGetASingleSpecialEvents({
        eventAlias,
    }: {
        eventAlias: eventAlias,
    }): CancelablePromise<{
        result?: {
            specialEvent?: {
                alias?: string;
                categories?: Array<{
                    categoryAlias?: string;
                    location?: string;
                }>;
                description?: string;
                id?: number;
                title?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/specialevents/{eventAlias}',
            path: {
                'eventAlias': eventAlias,
            },
        });
    }

    /**
     * Get Special Events time series
     * @returns any Get Special Events time series response
     * @throws ApiError
     */
    public radarSpecialeventsGetSpecialEventsTimeSeries({
        categoryAlias,
        eventAlias,
    }: {
        categoryAlias: categoryAlias,
        eventAlias: eventAlias,
    }): CancelablePromise<{
        result?: {
            serie_0?: {
                timestamps?: Array<string>;
                values?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/specialevents/{eventAlias}/{categoryAlias}',
            path: {
                'categoryAlias': categoryAlias,
                'eventAlias': eventAlias,
            },
        });
    }

}
