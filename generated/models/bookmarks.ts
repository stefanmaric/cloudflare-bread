/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { bookmarks_components_schemas_name } from './bookmarks_components_schemas_name';
import type { components_schemas_domain } from './components_schemas_domain';
import type { logo_url } from './logo_url';
import type { schemas_app_launcher_visible } from './schemas_app_launcher_visible';
import type { timestamp } from './timestamp';

export type bookmarks = {
    app_launcher_visible?: schemas_app_launcher_visible;
    created_at?: timestamp;
    domain?: components_schemas_domain;
    /**
     * The unique identifier for the Bookmark application.
     */
    id?: any;
    logo_url?: logo_url;
    name?: bookmarks_components_schemas_name;
    updated_at?: timestamp;
};

