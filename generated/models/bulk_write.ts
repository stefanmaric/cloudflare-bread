/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { expiration } from './expiration';
import type { expiration_ttl } from './expiration_ttl';
import type { key_name_bulk } from './key_name_bulk';
import type { list_metadata } from './list_metadata';

export type bulk_write = Array<{
    /**
     * Whether or not the server should base64 decode the value before storing it. Useful for writing values that wouldn't otherwise be valid JSON strings, such as images.
     */
    base64?: boolean;
    expiration?: expiration;
    expiration_ttl?: expiration_ttl;
    key?: key_name_bulk;
    metadata?: list_metadata;
    /**
     * A UTF-8 encoded string to be stored, up to 10 MB in length.
     */
    value?: string;
}>;
