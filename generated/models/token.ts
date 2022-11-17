/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_identifier } from './components_schemas_identifier';
import type { condition } from './condition';
import type { expires_on } from './expires_on';
import type { issued_on } from './issued_on';
import type { modified_on } from './modified_on';
import type { name } from './name';
import type { not_before } from './not_before';
import type { policies } from './policies';
import type { status } from './status';

export type token = {
    condition?: condition;
    expires_on?: expires_on;
    id: components_schemas_identifier;
    issued_on?: issued_on;
    modified_on?: modified_on;
    name: name;
    not_before?: not_before;
    policies: policies;
    status: status;
};

