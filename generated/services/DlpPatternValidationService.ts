/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_validate_response } from '../models/schemas_validate_response';
import type { validate_pattern } from '../models/validate_pattern';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DlpPatternValidationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Validate pattern
     * Validates whether this pattern is a valid regular expression. Rejects it if the regular expression is too complex or can match an unbounded-length string. Your regex will be rejected if it uses the Kleene Star -- be sure to bound the maximum number of characters that can be matched.
     * @returns schemas_validate_response Validate pattern response
     * @throws ApiError
     */
    public dlpPatternValidationValidatePattern({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: validate_pattern,
    }): CancelablePromise<schemas_validate_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/dlp/patterns/validate',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
