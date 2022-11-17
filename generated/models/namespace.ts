/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { namespace_identifier } from './namespace_identifier';
import type { namespace_title } from './namespace_title';

export type namespace = {
    id: namespace_identifier;
    /**
     * True if keys written on the URL will be URL-decoded before storing. For example, if set to "true", a key written on the URL as "%3F" will be stored as "?".
     */
    readonly supports_url_encoding?: boolean;
    title: namespace_title;
};

