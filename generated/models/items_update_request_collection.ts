/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { item_comment } from './item_comment';
import type { item_ip } from './item_ip';
import type { item_redirect } from './item_redirect';

export type items_update_request_collection = Array<{
    comment?: item_comment;
    ip?: item_ip;
    redirect?: item_redirect;
}>;
