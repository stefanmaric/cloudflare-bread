/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { accessRules } from './accessRules';

export type signed_token_request = {
    /**
     * The optional list of access rule constraints on the token. Access can be blocked or allowed based on an IP, IP range, or by country. Access rules are evaluated from first to last. If a rule matches, the associated action is applied and no further rules are evaluated.
     */
    readonly accessRules?: Array<accessRules>;
    /**
     * The optional boolean value that enables using signed tokens to access MP4 download links for a video.
     */
    readonly downloadable?: boolean;
    /**
     * The optional unix epoch timestamp that specficies the time after a token is not accepted. The maximum time specification is 24 hours from issuing time. If this field is not set, the default is one hour after issuing.
     */
    readonly exp?: number;
    /**
     * The optional ID of a Stream signing key. If present, the `pem` field is also required.
     */
    readonly id?: string;
    /**
     * The optional unix epoch timestamp that specifies the time before a the token is not accepted. If this field is not set, the default is one hour before issuing.
     */
    readonly nbf?: number;
    /**
     * The optional base64 encoded private key in PEM format associated with a Stream signing key. If present, the `id` field is also required.
     */
    readonly pem?: string;
};

