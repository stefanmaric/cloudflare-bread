/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { live_input_recording_allowedOrigins } from './live_input_recording_allowedOrigins';
import type { live_input_recording_mode } from './live_input_recording_mode';
import type { live_input_recording_requireSignedURLs } from './live_input_recording_requireSignedURLs';
import type { live_input_recording_timeoutSeconds } from './live_input_recording_timeoutSeconds';

/**
 * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.
 */
export type live_input_recording_settings = {
    allowedOrigins?: live_input_recording_allowedOrigins;
    mode?: live_input_recording_mode;
    requireSignedURLs?: live_input_recording_requireSignedURLs;
    timeoutSeconds?: live_input_recording_timeoutSeconds;
};

