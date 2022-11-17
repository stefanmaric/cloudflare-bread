/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { custom_response } from './custom_response';
import type { mode } from './mode';
import type { timeout } from './timeout';

/**
 * The action to perform when the threshold of matched traffic within the configured period is exceeded.
 */
export type components_schemas_action = {
    mode?: mode;
    response?: custom_response;
    timeout?: timeout;
};

