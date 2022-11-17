/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { certificates } from './certificates';

export type schemas_certificate_response_collection = (api_response_collection & {
    result?: Array<certificates>;
});

