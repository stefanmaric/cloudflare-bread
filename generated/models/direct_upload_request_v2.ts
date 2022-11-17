/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type direct_upload_request_v2 = {
    /**
     * The date after which the upload will not be accepted. Minimum: Now + 2 minutes. Maximum: Now + 6 hours.
     */
    expiry?: string;
    /**
     * User modifiable key-value store. Can be used for keeping references to another system of record, for managing images.
     */
    metadata?: Record<string, any>;
    /**
     * Indicates whether the image requires a signature token to be accessed.
     */
    requireSignedURLs?: boolean;
};

