/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { enabled_download_phase } from './enabled_download_phase';
import type { enabled_upload_phase } from './enabled_upload_phase';
import type { fail_closed } from './fail_closed';

/**
 * Anti virus settings.
 */
export type anti_virus_settings = {
    enabled_download_phase?: enabled_download_phase;
    enabled_upload_phase?: enabled_upload_phase;
    fail_closed?: fail_closed;
};

