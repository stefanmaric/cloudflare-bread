/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Block page layout settings.
 */
export type block_page_settings = {
    /**
     * Block page background color in #rrggbb format.
     */
    background_color?: string;
    /**
     * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
     */
    enabled?: boolean;
    /**
     * Block page footer text.
     */
    footer_text?: string;
    /**
     * Block page header text.
     */
    header_text?: string;
    /**
     * Full URL to the logo file.
     */
    logo_path?: string;
    /**
     * Admin email for users to contact.
     */
    mailto_address?: string;
    /**
     * Subject line for emails created from block page.
     */
    mailto_subject?: string;
    /**
     * Block page title.
     */
    name?: string;
    /**
     * Suppress detailed info at the bottom of the block page.
     */
    suppress_footer?: boolean;
};

