/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The definition of the redirect.
 */
export type item_redirect = {
    include_subdomains?: boolean;
    preserve_path_suffix?: boolean;
    preserve_query_string?: boolean;
    source_url: string;
    status_code?: 301 | 302 | 307 | 308;
    subpath_matching?: boolean;
    target_url: string;
};

