/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { is_default_network } from './is_default_network';
import type { schemas_comment } from './schemas_comment';
import type { vnet_id } from './vnet_id';
import type { vnet_name } from './vnet_name';

export type virtual_network = {
    comment: schemas_comment;
    /**
     * Timestamp of when the virtual network was created, formatted in RFC 3339.
     */
    created_at: any;
    /**
     * If present, indicates that the virtual network was deleted at the given date (formatted in RFC 3339). If absent, the virtual network has not been deleted.
     */
    readonly deleted_at?: string | null;
    id: vnet_id;
    is_default_network: is_default_network;
    name: vnet_name;
};

