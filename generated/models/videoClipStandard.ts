/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowedOrigins } from './allowedOrigins';
import type { clipped_from_video_uid } from './clipped_from_video_uid';
import type { creator } from './creator';
import type { end_time_seconds } from './end_time_seconds';
import type { requireSignedURLs } from './requireSignedURLs';
import type { schemas_maxDurationSeconds } from './schemas_maxDurationSeconds';
import type { start_time_seconds } from './start_time_seconds';
import type { thumbnailTimestampPct } from './thumbnailTimestampPct';
import type { watermarkAtUpload } from './watermarkAtUpload';

export type videoClipStandard = {
    allowedOrigins?: allowedOrigins;
    clippedFromVideoUID: clipped_from_video_uid;
    creator?: creator;
    endTimeSeconds: end_time_seconds;
    maxDurationSeconds?: schemas_maxDurationSeconds;
    requireSignedURLs?: requireSignedURLs;
    startTimeSeconds: start_time_seconds;
    thumbnailTimestampPct?: thumbnailTimestampPct;
    watermark?: watermarkAtUpload;
};

