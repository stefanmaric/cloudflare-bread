/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { body } from './body';
import type { content_type } from './content_type';

/**
 * A custom content type and reponse to return when the threshold is exceeded. The custom response configured in this object will override the custom error for the zone. This object is optional.
 * Notes: If you omit this object, Cloudflare will use the default HTML error page. If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone challenge pages and you should not provide the "response" object.
 */
export type custom_response = {
    body?: body;
    content_type?: content_type;
};

