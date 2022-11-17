/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { paused } from './paused';
import type { vanity_name_servers } from './vanity_name_servers';

export type schemas_patch = {
    paused?: paused;
    /**
     * The desired plan for the zone. Changing this value will create/cancel associated subscriptions. To view available plans for this zone, see Zone Plans.
     */
    plan?: {
        id?: common_components_schemas_identifier;
    };
    /**
     * A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. This parameter is only available to Enterprise customers or if it has been explicitly enabled on a zone.
     */
    type?: 'full' | 'partial';
    vanity_name_servers?: vanity_name_servers;
};

