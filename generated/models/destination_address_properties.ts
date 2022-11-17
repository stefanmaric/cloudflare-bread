/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { created } from './created';
import type { destination_address_identifier } from './destination_address_identifier';
import type { email } from './email';
import type { modified } from './modified';
import type { verified } from './verified';

export type destination_address_properties = {
    created?: created;
    email?: email;
    modified?: modified;
    tag?: destination_address_identifier;
    verified?: verified;
};

