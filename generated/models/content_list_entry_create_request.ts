/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { content_list_entry_content } from './content_list_entry_content';
import type { content_list_entry_description } from './content_list_entry_description';
import type { content_list_entry_type } from './content_list_entry_type';

export type content_list_entry_create_request = {
    content: content_list_entry_content;
    description?: content_list_entry_description;
    type: content_list_entry_type;
};

