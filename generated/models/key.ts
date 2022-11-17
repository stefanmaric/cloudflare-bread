/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { key_name } from './key_name';
import type { list_metadata } from './list_metadata';

/**
 * A name for a value. A value stored under a given key may be retrieved via the same key.
 */
export type key = {
    /**
     * The time, measured in number of seconds since the UNIX epoch, at which the key will expire. This property is omitted for keys that will not expire.
     */
    expiration?: number;
    metadata?: list_metadata;
    name: key_name;
};

