/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudflareIPsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Cloudflare IP Details
     * Get Cloudflare IPs.
     * @returns any Cloudflare IP Details response
     * @throws ApiError
     */
    public cloudflareIPsCloudflareIpDetails(): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ips',
        });
    }

}
