/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configures cookie attributes for the waiting room cookie. This encrypted cookie stores a user's status in the waiting room, such as queue position.
 */
export type cookie_attributes = {
    /**
     * Configures the SameSite attribute on the waiting room cookie. Value `auto` will be translated to `lax` or `none` depending if **Always Use HTTPS** is enabled. Note that when using value `none`, the secure attribute cannot be set to `never`.
     */
    samesite?: 'auto' | 'lax' | 'none' | 'strict';
    /**
     * Configures the Secure attribute on the waiting room cookie. Value `always` indicates that the Secure attribute will be set in the Set-Cookie header, `never` indicates that the Secure attribute will not be set, and `auto` will set the Secure attribute depending if **Always Use HTTPS** is enabled.
     */
    secure?: 'auto' | 'always' | 'never';
};

