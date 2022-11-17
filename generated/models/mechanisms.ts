/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { uuid } from './uuid';

/**
 * List of IDs that will be used when dispatching a notification. IDs for email type will be the email address.
 */
export type mechanisms = Record<string, Array<{
    id?: uuid;
}>>;
