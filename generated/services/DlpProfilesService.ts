/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_custom_profile_response } from '../models/create_custom_profile_response';
import type { create_custom_profiles } from '../models/create_custom_profiles';
import type { custom_profile } from '../models/custom_profile';
import type { custom_profile_response } from '../models/custom_profile_response';
import type { either_profile_response } from '../models/either_profile_response';
import type { predefined_profile } from '../models/predefined_profile';
import type { predefined_profile_response } from '../models/predefined_profile_response';
import type { profile_id } from '../models/profile_id';
import type { profiles_components_schemas_response_collection } from '../models/profiles_components_schemas_response_collection';
import type { update_custom_profile } from '../models/update_custom_profile';
import type { update_predefined_profile } from '../models/update_predefined_profile';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DlpProfilesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all profiles
     * Lists all DLP profiles in an account.
     * @returns profiles_components_schemas_response_collection List all profiles response
     * @throws ApiError
     */
    public dlpProfilesListAllProfiles({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<profiles_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/dlp/profiles',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create custom profiles
     * Creates a set of DLP custom profiles.
     * @returns create_custom_profile_response Create custom profiles response
     * @throws ApiError
     */
    public dlpProfilesCreateCustomProfiles({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: create_custom_profiles,
    }): CancelablePromise<create_custom_profile_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/dlp/profiles/custom',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete custom profile
     * Deletes a DLP custom profile.
     * @returns api_response_single Delete custom profile response
     * @throws ApiError
     */
    public dlpProfilesDeleteCustomProfile({
        profileId,
        accountIdentifier,
        requestBody,
    }: {
        profileId: profile_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/dlp/profiles/custom/{profile_id}',
            path: {
                'profile_id': profileId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get custom profile
     * Fetches a custom DLP profile.
     * @returns custom_profile_response Get custom profile response
     * @throws ApiError
     */
    public dlpProfilesGetCustomProfile({
        profileId,
        accountIdentifier,
    }: {
        profileId: profile_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_profile_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/dlp/profiles/custom/{profile_id}',
            path: {
                'profile_id': profileId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update custom profile
     * Updates a DLP custom profile.
     * @returns custom_profile Update custom profile response
     * @throws ApiError
     */
    public dlpProfilesUpdateCustomProfile({
        profileId,
        accountIdentifier,
        requestBody,
    }: {
        profileId: profile_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: update_custom_profile,
    }): CancelablePromise<custom_profile> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/dlp/profiles/custom/{profile_id}',
            path: {
                'profile_id': profileId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get predefined profile
     * Fetches a predefined DLP profile.
     * @returns predefined_profile_response Get predefined profile response
     * @throws ApiError
     */
    public dlpProfilesGetPredefinedProfile({
        profileId,
        accountIdentifier,
    }: {
        profileId: profile_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<predefined_profile_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/dlp/profiles/predefined/{profile_id}',
            path: {
                'profile_id': profileId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update predefined profile
     * Updates a DLP predefined profile. Only supports enabling/disabling entries.
     * @returns predefined_profile Update predefined profile response
     * @throws ApiError
     */
    public dlpProfilesUpdatePredefinedProfile({
        profileId,
        accountIdentifier,
        requestBody,
    }: {
        profileId: profile_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: update_predefined_profile,
    }): CancelablePromise<predefined_profile> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/dlp/profiles/predefined/{profile_id}',
            path: {
                'profile_id': profileId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get DLP Profile
     * Fetches a DLP profile by ID. Supports both predefined and custom profiles
     * @returns either_profile_response Get DLP Profile response
     * @throws ApiError
     */
    public dlpProfilesGetDlpProfile({
        profileId,
        accountIdentifier,
    }: {
        profileId: profile_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<either_profile_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/dlp/profiles/{profile_id}',
            path: {
                'profile_id': profileId,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
