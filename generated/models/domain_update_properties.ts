/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { auto_renew } from './auto_renew';
import type { locked } from './locked';
import type { name_servers } from './name_servers';
import type { privacy } from './privacy';

export type domain_update_properties = {
    auto_renew?: auto_renew;
    locked?: locked;
    name_servers?: name_servers;
    privacy?: privacy;
};

