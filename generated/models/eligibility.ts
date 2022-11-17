/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { eligibility_components_schemas_type } from './eligibility_components_schemas_type';
import type { eligible } from './eligible';
import type { ready } from './ready';

export type eligibility = {
    eligible?: eligible;
    ready?: ready;
    type?: eligibility_components_schemas_type;
};

