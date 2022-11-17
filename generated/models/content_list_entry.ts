/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { content_list_entry_content } from './content_list_entry_content';
import type { content_list_entry_description } from './content_list_entry_description';
import type { content_list_entry_type } from './content_list_entry_type';
import type { timestamp } from './timestamp';

/**
 * Content list entry to be blocked.
 */
export type content_list_entry = {
    content?: content_list_entry_content;
    created_on?: timestamp;
    description?: content_list_entry_description;
    id?: common_components_schemas_identifier;
    modified_on?: timestamp;
    type?: content_list_entry_type;
};

