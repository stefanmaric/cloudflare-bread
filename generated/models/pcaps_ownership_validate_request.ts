/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pcaps_destination_conf } from './pcaps_destination_conf';
import type { pcaps_ownership_challenge } from './pcaps_ownership_challenge';

export type pcaps_ownership_validate_request = {
    destination_conf: pcaps_destination_conf;
    ownership_challenge: pcaps_ownership_challenge;
};

