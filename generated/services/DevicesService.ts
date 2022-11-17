/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { default_device_settings_response } from '../models/default_device_settings_response';
import type { device_response } from '../models/device_response';
import type { device_settings_response } from '../models/device_settings_response';
import type { device_settings_response_collection } from '../models/device_settings_response_collection';
import type { devices_components_schemas_identifier } from '../models/devices_components_schemas_identifier';
import type { devices_response } from '../models/devices_response';
import type { fallback_domain } from '../models/fallback_domain';
import type { fallback_domain_response_collection } from '../models/fallback_domain_response_collection';
import type { override_codes_response } from '../models/override_codes_response';
import type { revoke_devices_request } from '../models/revoke_devices_request';
import type { split_tunnel } from '../models/split_tunnel';
import type { split_tunnel_include } from '../models/split_tunnel_include';
import type { split_tunnel_include_response_collection } from '../models/split_tunnel_include_response_collection';
import type { split_tunnel_response_collection } from '../models/split_tunnel_response_collection';
import type { unrevoke_devices_request } from '../models/unrevoke_devices_request';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DevicesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Devices
     * List Enrolled Devices.
     * @returns devices_response List Devices response
     * @throws ApiError
     */
    public devicesListDevices({
        identifier,
    }: {
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<devices_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * List Device Settings Policies
     * Lists the device settings policies for an account.
     * @returns device_settings_response_collection List Device Settings Policies response
     * @throws ApiError
     */
    public devicesListDeviceSettingsPolicies({
        identifier,
    }: {
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<device_settings_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policies',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Get Default Device Settings Policy
     * Get the default device settings policy for an account.
     * @returns default_device_settings_response Get Default Device Settings Policy response
     * @throws ApiError
     */
    public devicesGetDefaultDeviceSettingsPolicy({
        identifier,
    }: {
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<default_device_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Default Device Settings Policy
     * Update the default device settings policy for an account.
     * @returns default_device_settings_response Update Default Device Settings Policy response
     * @throws ApiError
     */
    public devicesUpdateDefaultDeviceSettingsPolicy({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<default_device_settings_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{identifier}/devices/policy',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create Device Settings Policy
     * Create a device settings policy to be applied to certain devices matching the criteria.
     * @returns device_settings_response Create Device Settings Policy response
     * @throws ApiError
     */
    public devicesCreateDeviceSettingsPolicy({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_settings_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/devices/policy',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Split Tunnel Exclude List
     * Get the list of routes excluded from the WARP client's tunnel.
     * @returns split_tunnel_response_collection Get Split Tunnel Exclude List response
     * @throws ApiError
     */
    public devicesGetSplitTunnelExcludeList({
        identifier,
    }: {
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<split_tunnel_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/exclude',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Set Split Tunnel Exclude List
     * Set the list of routes excluded from the WARP client's tunnel.
     * @returns split_tunnel_response_collection Set Split Tunnel Exclude List response
     * @throws ApiError
     */
    public devicesSetSplitTunnelExcludeList({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: Array<split_tunnel>,
    }): CancelablePromise<split_tunnel_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/policy/exclude',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Local Domain Fallback List
     * Get the list of domains to bypass Gateway for DNS resolution and instead use the specified server.
     * @returns fallback_domain_response_collection Get Local Domain Fallback List response
     * @throws ApiError
     */
    public devicesGetLocalDomainFallbackList({
        identifier,
    }: {
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<fallback_domain_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/fallback_domains',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Set Local Domain Fallback List
     * Set the list of domains to bypass Gateway for DNS resolution and instead use the specified server.
     * @returns fallback_domain_response_collection Set Local Domain Fallback List response
     * @throws ApiError
     */
    public devicesSetLocalDomainFallbackList({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: Array<fallback_domain>,
    }): CancelablePromise<fallback_domain_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/policy/fallback_domains',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Split Tunnel Include List
     * Get the list of routes included in the WARP client's tunnel.
     * @returns split_tunnel_include_response_collection Get Split Tunnel Include List response
     * @throws ApiError
     */
    public devicesGetSplitTunnelIncludeList({
        identifier,
    }: {
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<split_tunnel_include_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/include',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Set Split Tunnel Include List
     * Set the list of routes included in the WARP client's tunnel.
     * @returns split_tunnel_include_response_collection Set Split Tunnel Include List response
     * @throws ApiError
     */
    public devicesSetSplitTunnelIncludeList({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: Array<split_tunnel_include>,
    }): CancelablePromise<split_tunnel_include_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/policy/include',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Device Settings Policy
     * Delete a device settings policy. Returns the remaining policies for the account.
     * @returns device_settings_response_collection Delete Device Settings Policy response
     * @throws ApiError
     */
    public devicesDeleteDeviceSettingsPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_settings_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/devices/policy/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Device Settings Policy by ID
     * Get the device settings policy by ID.
     * @returns device_settings_response Get Device Settings Policy by ID response
     * @throws ApiError
     */
    public devicesGetDeviceSettingsPolicyById({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<device_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Device Settings Policy
     * Update a device settings policy.
     * @returns device_settings_response Update Device Settings Policy response
     * @throws ApiError
     */
    public devicesUpdateDeviceSettingsPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<device_settings_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{identifier}/devices/policy/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Split Tunnel Exclude List for a Device Settings Policy
     * Get the list of routes excluded from the WARP client's tunnel for one specific device settings policy.
     * @returns split_tunnel_response_collection Get Split Tunnel Exclude List for a Device Settings Policy response
     * @throws ApiError
     */
    public devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<split_tunnel_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/{uuid}/exclude',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Set Split Tunnel Exclude List for a Device Settings Policy
     * Set the list of routes excluded from the WARP client's tunnel for one specific device settings policy.
     * @returns split_tunnel_response_collection Set Split Tunnel Exclude List for a Device Settings Policy response
     * @throws ApiError
     */
    public devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
        requestBody: Array<split_tunnel>,
    }): CancelablePromise<split_tunnel_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/policy/{uuid}/exclude',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Local Domain Fallback List for a Device Settings Policy
     * Get the list of domains to bypass Gateway for DNS resolution and instead use the specified server.
     * @returns fallback_domain_response_collection Get Local Domain Fallback List for a Device Settings Policy response
     * @throws ApiError
     */
    public devicesGetLocalDomainFallbackListForADeviceSettingsPolicy({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<fallback_domain_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/{uuid}/fallback_domains',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Set Local Domain Fallback List for a Device Settings Policy
     * Set the list of domains to bypass Gateway for DNS resolution and instead use the specified server.
     * @returns fallback_domain_response_collection Set Local Domain Fallback List for a Device Settings Policy response
     * @throws ApiError
     */
    public devicesSetLocalDomainFallbackListForADeviceSettingsPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
        requestBody: Array<fallback_domain>,
    }): CancelablePromise<fallback_domain_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/policy/{uuid}/fallback_domains',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Split Tunnel Include List for a Device Settings Policy
     * Get the list of routes included in the WARP client's tunnel for one specific device settings policy.
     * @returns split_tunnel_include_response_collection Get Split Tunnel Include List for a Device Settings Policy response
     * @throws ApiError
     */
    public devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<split_tunnel_include_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/policy/{uuid}/include',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Set Split Tunnel Include List for a Device Settings Policy
     * Set the list of routes included in the WARP client's tunnel for one specific device settings policy.
     * @returns split_tunnel_include_response_collection Set Split Tunnel Include List for a Device Settings Policy response
     * @throws ApiError
     */
    public devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
        requestBody: Array<split_tunnel_include>,
    }): CancelablePromise<split_tunnel_include_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/policy/{uuid}/include',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke Devices
     * Revoke a list of devices.
     * @returns api_response_single Revoke Devices response
     * @throws ApiError
     */
    public devicesRevokeDevices({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: revoke_devices_request,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/devices/revoke',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Unrevoke Devices
     * Unrevoke a list of devices.
     * @returns api_response_single Unrevoke Devices response
     * @throws ApiError
     */
    public devicesUnrevokeDevices({
        identifier,
        requestBody,
    }: {
        identifier: devices_components_schemas_identifier,
        requestBody: unrevoke_devices_request,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/devices/unrevoke',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Device Details
     * Fetch a single Device.
     * @returns device_response Device Details response
     * @throws ApiError
     */
    public devicesDeviceDetails({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<device_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * List Admin Override code for device
     * Fetch one-time use admin override code for a device. This relies on the Admin Override setting being enabled in your device configuration.
     * @returns override_codes_response List Admin Override code for device response
     * @throws ApiError
     */
    public devicesListAdminOverrideCodeForDevice({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: devices_components_schemas_identifier,
    }): CancelablePromise<override_codes_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/{uuid}/override_codes',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

}
