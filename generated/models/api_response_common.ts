/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { messages } from './messages';

export type api_response_common = {
    errors: messages;
    messages: messages;
    result: (Record<string, any> | string);
    /**
     * Whether the API call was successful
     */
    success: boolean;
};

