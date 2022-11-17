/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { content_list_action } from './content_list_action';
import type { content_list_entries } from './content_list_entries';

export type content_list_update_request = {
    action: content_list_action;
    entries: content_list_entries;
};

