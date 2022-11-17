/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { timestamp } from './timestamp';

export type saas_app = {
    /**
     * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
     */
    consumer_service_url?: string;
    created_at?: timestamp;
    custom_attributes?: {
        /**
         * The name of the attribute.
         */
        name?: string;
        /**
         * A globally unique name for an identity or service provider.
         */
        name_format?: 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified' | 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic' | 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri';
        source?: {
            /**
             * The name of the IdP attribute.
             */
            name?: string;
        };
    };
    /**
     * The unique identifier for your SaaS application.
     */
    idp_entity_id?: string;
    /**
     * The format of the name identifier sent to the SaaS application.
     */
    name_id_format?: 'id' | 'email';
    /**
     * The Access public certificate that will be used to verify your identity.
     */
    public_key?: string;
    /**
     * A globally unique name for an identity or service provider.
     */
    sp_entity_id?: string;
    /**
     * The endpoint where your SaaS application will send login requests.
     */
    sso_endpoint?: string;
    updated_at?: timestamp;
};

