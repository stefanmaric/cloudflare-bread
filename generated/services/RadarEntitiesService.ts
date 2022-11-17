/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { entities_components_schemas_asn } from '../models/entities_components_schemas_asn';
import type { location } from '../models/location';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarEntitiesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get autonomous systems
     * Gets a list of autonomous systems (AS).
     * @returns any Get autonomous systems response
     * @throws ApiError
     */
    public radarEntitiesGetAutonomousSystems(): CancelablePromise<{
        ases?: Array<{
            aka?: string;
            asn?: number;
            name?: string;
            nameLong?: string;
            website?: string;
        }>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/entities/asns',
        });
    }

    /**
     * Get autonomous system information by IP address
     * @returns any Get autonomous system information by IP address response
     * @throws ApiError
     */
    public radarEntitiesGetAutonomousSystemInformationByIpAddress(): CancelablePromise<{
        result?: {
            asn?: {
                aka?: string;
                asn?: number;
                country?: string;
                name?: string;
                nameLong?: string;
                related?: Array<{
                    aka?: string;
                    asn?: number;
                    name?: string;
                }>;
                website?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/entities/asns/ip',
        });
    }

    /**
     * Get autonomous system (AS) by ID
     * Get the requested autonomous system information. A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this AS).
     * @returns any Get autonomous system (AS) by ID response
     * @throws ApiError
     */
    public radarEntitiesGetAutonomousSystemAsById({
        asn,
    }: {
        asn: entities_components_schemas_asn,
    }): CancelablePromise<{
        result?: {
            asn?: {
                aka?: string;
                asn?: number;
                confidenceLevel?: number;
                country?: string;
                name?: string;
                nameLong?: string;
                related?: Array<{
                    aka?: string;
                    asn?: number;
                    name?: string;
                }>;
                website?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/entities/asns/{asn}',
            path: {
                'asn': asn,
            },
        });
    }

    /**
     * Get locations
     * Get a list of locations.
     * @returns any Get locations response
     * @throws ApiError
     */
    public radarEntitiesGetLocations(): CancelablePromise<{
        result?: {
            locations?: Array<{
                alpha2?: string;
                latitude?: string;
                longitude?: string;
                name?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/entities/locations',
        });
    }

    /**
     * Get location
     * Get the requested location information. A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this location).
     * @returns any Get location response
     * @throws ApiError
     */
    public radarEntitiesGetLocation({
        location,
    }: {
        location: location,
    }): CancelablePromise<{
        result?: {
            location?: {
                alpha2?: string;
                confidenceLvel?: number;
                latitude?: string;
                longitude?: string;
                name?: string;
                region?: string;
                subregion?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/entities/locations/{location}',
            path: {
                'location': location,
            },
        });
    }

}
