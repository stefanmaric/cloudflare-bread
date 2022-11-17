/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { item_comment } from './item_comment';
import type { item_ip } from './item_ip';
import type { item_redirect } from './item_redirect';
import type { list_id } from './list_id';

export type item = {
    comment?: item_comment;
    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    readonly created_on?: string;
    id?: list_id;
    ip?: item_ip;
    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    readonly modified_on?: string;
    redirect?: item_redirect;
};

