/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { single_user_response } from '../models/single_user_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * User Details
     * @returns single_user_response User Details response
     * @throws ApiError
     */
    public userUserDetails(): CancelablePromise<single_user_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
        });
    }

    /**
     * Edit User
     * Edit part of your user details.
     * @returns single_user_response Edit User response
     * @throws ApiError
     */
    public userEditUser({
        requestBody,
    }: {
        requestBody: any,
    }): CancelablePromise<single_user_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
