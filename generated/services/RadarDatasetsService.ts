/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarDatasetsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Datasets
     * Get a list of datasets.
     * @returns any Get Datasets response
     * @throws ApiError
     */
    public radarDatasetsGetDatasets(): CancelablePromise<{
        result?: {
            datasets?: Array<{
                description?: string;
                id?: number;
                meta?: Record<string, any>;
                tags?: Array<string>;
                title?: string;
                type?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/datasets',
        });
    }

    /**
     * Get Dataset download url
     * Get a list of datasets.
     * @returns any Get Dataset download url response
     * @throws ApiError
     */
    public radarDatasetsGetDatasetDownloadUrl({
        requestBody,
    }: {
        requestBody: {
            datasetId?: number;
        },
    }): CancelablePromise<{
        dataset?: Array<{
            url?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/radar/datasets/download',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Datasets
     * Get a list of datasets.
     * @returns any Get Datasets response
     * @throws ApiError
     */
    public radarDatasetsGetDatasets1(): CancelablePromise<{
        result?: {
            datasets?: Array<{
                description?: string;
                id?: number;
                meta?: Record<string, any>;
                tags?: Array<string>;
                title?: string;
                type?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/reports/datasets',
        });
    }

    /**
     * Get Dataset download url
     * Get a list of datasets.
     * @returns any Get Dataset download url response
     * @throws ApiError
     */
    public radarDatasetsGetDatasetDownloadUrl1({
        requestBody,
    }: {
        requestBody: {
            datasetId?: number;
        },
    }): CancelablePromise<{
        dataset?: Array<{
            url?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/radar/reports/datasets/download',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
