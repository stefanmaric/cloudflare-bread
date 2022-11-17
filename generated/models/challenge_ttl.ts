/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_base } from './schemas_base';

/**
 * Specify how long a visitor is allowed access to your site after successfully completing a challenge (such as a CAPTCHA). After the TTL has expired the visitor will have to complete a new challenge. We recommend a 15 - 45 minute setting and will attempt to honor any setting above 45 minutes. (https://support.cloudflare.com/hc/en-us/articles/200170136).
 */
export type challenge_ttl = schemas_base;

