/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type image_basic_upload_via_url = {
    /**
     * User modifiable key-value store. Can use used for keeping references to another system of record for managing images.
     */
    metadata?: Record<string, any>;
    /**
     * Indicates whether the image requires a signature token for the access.
     */
    requireSignedURLs?: boolean;
    /**
     * A URL to fetch an image from origin.
     */
    url: string;
};

