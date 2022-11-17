/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowedOrigins } from './allowedOrigins';
import type { creator } from './creator';
import type { requireSignedURLs } from './requireSignedURLs';
import type { thumbnailTimestampPct } from './thumbnailTimestampPct';
import type { watermark_at_upload } from './watermark_at_upload';

export type direct_upload_request = {
    allowedOrigins?: allowedOrigins;
    creator?: creator;
    /**
     * The date and time after upload when videos will not be accepted.
     */
    expiry?: string;
    /**
     * Calculates the amount of time a video occupies before the video is uploaded. Direct uploads occupy minutes of videos on your Stream account until they are expired. After upload, the upload duration is used instead. If a video longer than the value is uploaded, the video results in an error.
     */
    maxDurationSeconds: number;
    requireSignedURLs?: requireSignedURLs;
    thumbnailTimestampPct?: thumbnailTimestampPct;
    watermark?: watermark_at_upload;
};

