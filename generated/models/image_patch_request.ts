/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type image_patch_request = {
    /**
     * User modifiable key-value store. Can be used for keeping references to another system of record for managing images. No change if not specified.
     */
    metadata?: Record<string, any>;
    /**
     * Indicates whether the image can be accessed using only its UID. If set to `true`, a signed token needs to be generated with a signing key to view the image. Returns a new UID on a change. No change if not specified.
     */
    requireSignedURLs?: boolean;
};

