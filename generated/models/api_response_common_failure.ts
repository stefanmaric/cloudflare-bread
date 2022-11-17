/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { messages } from './messages';

export type api_response_common_failure = {
    errors: messages;
    messages: messages;
    result: any;
    /**
     * Whether the API call was successful
     */
    success: boolean;
};

