/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { result_info } from './result_info';
import type { script } from './script';

export type list_zone_scripts_response = (api_response_collection & {
    result?: Array<script>;
    result_info?: result_info;
});

