/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A pattern that matches an entry
 */
export type components_schemas_pattern = {
    /**
     * The regex pattern.
     */
    regex: string;
    /**
     * Validation algorithm for the pattern. This algorithm will get run on potential matches, and if it returns false, the entry will not be matched.
     */
    validation?: 'luhn';
};

