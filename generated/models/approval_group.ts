/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A group of email addresses that can approve a temporary authentication request.
 */
export type approval_group = {
    /**
     * The number of approvals needed to obtain access.
     */
    approvals_needed: number;
    /**
     * A list of emails that can approve the access request.
     */
    email_addresses?: Array<any>;
    /**
     * The UUID of an re-usable email list.
     */
    email_list_uuid?: string;
};

