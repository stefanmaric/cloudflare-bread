/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Value of the zone setting.
 */
export type mobile_redirect_value = {
    /**
     * Which subdomain prefix you wish to redirect visitors on mobile devices to (subdomain must already exist).
     */
    mobile_subdomain?: string | null;
    /**
     * Whether or not mobile redirect is enabled.
     */
    status?: 'on' | 'off';
    /**
     * Whether to drop the current page path and redirect to the mobile subdomain URL root, or keep the path and redirect to the same page on the mobile subdomain.
     */
    strip_uri?: boolean;
};

