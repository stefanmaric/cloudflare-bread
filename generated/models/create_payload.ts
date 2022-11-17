/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { condition } from './condition';
import type { expires_on } from './expires_on';
import type { name } from './name';
import type { not_before } from './not_before';
import type { policies } from './policies';

export type create_payload = {
    condition?: condition;
    expires_on?: expires_on;
    name: name;
    not_before?: not_before;
    policies: policies;
};

