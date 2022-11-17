/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * String constraint.
 */
export type string_constraint = {
    /**
     * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
     */
    operator: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';
    /**
     * The value to apply the operator to.
     */
    value: string;
};

