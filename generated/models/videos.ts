/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowedOrigins } from './allowedOrigins';
import type { creator } from './creator';
import type { input } from './input';
import type { liveInput } from './liveInput';
import type { maxDurationSeconds } from './maxDurationSeconds';
import type { media_metadata } from './media_metadata';
import type { media_status } from './media_status';
import type { nft } from './nft';
import type { oneTimeUploadExpiry } from './oneTimeUploadExpiry';
import type { playback } from './playback';
import type { preview } from './preview';
import type { readyToStream } from './readyToStream';
import type { requireSignedURLs } from './requireSignedURLs';
import type { schemas_created } from './schemas_created';
import type { schemas_duration } from './schemas_duration';
import type { schemas_modified } from './schemas_modified';
import type { size } from './size';
import type { thumbnail_url } from './thumbnail_url';
import type { thumbnailTimestampPct } from './thumbnailTimestampPct';
import type { uploaded } from './uploaded';
import type { videos_components_schemas_identifier } from './videos_components_schemas_identifier';
import type { watermarks } from './watermarks';

export type videos = {
    allowedOrigins?: allowedOrigins;
    created?: schemas_created;
    creator?: creator;
    duration?: schemas_duration;
    input?: input;
    liveInput?: liveInput;
    maxDurationSeconds?: maxDurationSeconds;
    meta?: media_metadata;
    modified?: schemas_modified;
    nft?: nft;
    playback?: playback;
    preview?: preview;
    readyToStream?: readyToStream;
    requireSignedURLs?: requireSignedURLs;
    size?: size;
    status?: media_status;
    thumbnail?: thumbnail_url;
    thumbnailTimestampPct?: thumbnailTimestampPct;
    uid?: videos_components_schemas_identifier;
    uploadExpiry?: oneTimeUploadExpiry;
    uploaded?: uploaded;
    watermark?: watermarks;
};

