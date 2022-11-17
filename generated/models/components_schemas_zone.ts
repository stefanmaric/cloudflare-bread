/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';

export type components_schemas_zone = {
    /**
     * The last time proof of ownership was detected and the zone was made
     * active
     */
    readonly activated_on: string | null;
    /**
     * When the zone was created
     */
    readonly created_on: string;
    /**
     * The interval (in seconds) from when development mode expires
     * (positive integer) or last expired (negative integer) for the
     * domain. If development mode has never been enabled, this value is 0.
     */
    readonly development_mode: number;
    id: common_components_schemas_identifier;
    /**
     * When the zone was last modified
     */
    readonly modified_on: string;
    /**
     * The domain name
     */
    readonly name: string;
    /**
     * DNS host at the time of switching to Cloudflare
     */
    readonly original_dnshost: string | null;
    /**
     * Original name servers before moving to Cloudflare
     * Notes: Is this only available for full zones?
     */
    readonly original_name_servers: Array<string> | null;
    /**
     * Registrar for the domain at the time of switching to Cloudflare
     */
    readonly original_registrar: string | null;
};

