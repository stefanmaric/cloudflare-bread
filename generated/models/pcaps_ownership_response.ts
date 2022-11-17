/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pcaps_destination_conf } from './pcaps_destination_conf';
import type { pcaps_ownership_challenge } from './pcaps_ownership_challenge';

export type pcaps_ownership_response = {
    destination_conf: pcaps_destination_conf;
    filename: pcaps_ownership_challenge;
    /**
     * The bucket ID associated with the packet captures API.
     */
    id: string;
    /**
     * The status of the ownership challenge. Can be pending, success or failed.
     */
    status: 'pending' | 'success' | 'failed';
    /**
     * The RFC 3339 timestamp when the bucket was added to packet captures API.
     */
    submitted: string;
    /**
     * The RFC 3339 timestamp when the bucket was validated.
     */
    validated?: string;
};

