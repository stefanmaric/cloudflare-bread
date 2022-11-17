/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This is a record which can be placed to activate a hostname.
 */
export type ownership_verification = {
    /**
     * DNS Name for record.
     */
    name?: string;
    /**
     * DNS Record type.
     */
    type?: 'txt';
    /**
     * Content for the record.
     */
    value?: string;
};

