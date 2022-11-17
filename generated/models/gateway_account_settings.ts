/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { activity_log_settings } from './activity_log_settings';
import type { anti_virus_settings } from './anti_virus_settings';
import type { block_page_settings } from './block_page_settings';
import type { browser_isolation_settings } from './browser_isolation_settings';
import type { fips_settings } from './fips_settings';
import type { tls_settings } from './tls_settings';

/**
 * account settings.
 */
export type gateway_account_settings = {
    /**
     * account settings.
     */
    settings?: {
        activity_log?: activity_log_settings;
        antivirus?: anti_virus_settings;
        block_page?: block_page_settings;
        browser_isolation?: browser_isolation_settings;
        fips?: fips_settings;
        tls_decrypt?: tls_settings;
    };
};

