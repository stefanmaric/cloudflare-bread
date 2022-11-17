/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_common } from './api_response_common';
import type { ruleset } from './ruleset';

export type ruleset_response = (api_response_common & {
    result?: ruleset;
});

