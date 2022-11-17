/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Matches a SAML group.
 * Requires a SAML identity provider.
 */
export type saml_group_rule = {
    saml: {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;
        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
    };
};

