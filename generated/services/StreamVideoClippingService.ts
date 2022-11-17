/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { clipResponseSingle } from '../models/clipResponseSingle';
import type { components_schemas_account_identifier } from '../models/components_schemas_account_identifier';
import type { videoClipStandard } from '../models/videoClipStandard';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamVideoClippingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Clip videos given a start and end time
     * Clips a video based on the specified start and end times provided in seconds.
     * @returns clipResponseSingle Clip videos given a start and end time response
     * @throws ApiError
     */
    public streamVideoClippingClipVideosGivenAStartAndEndTime({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: components_schemas_account_identifier,
        requestBody: videoClipStandard,
    }): CancelablePromise<clipResponseSingle> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/clip',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
