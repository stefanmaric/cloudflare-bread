/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { invite_components_schemas_identifier } from './invite_components_schemas_identifier';
import type { invited_by } from './invited_by';
import type { invited_member_email } from './invited_member_email';
import type { invited_on } from './invited_on';
import type { schemas_expires_on } from './schemas_expires_on';
import type { schemas_role } from './schemas_role';

export type base = {
    expires_on?: schemas_expires_on;
    id?: invite_components_schemas_identifier;
    invited_by?: invited_by;
    invited_member_email?: invited_member_email;
    /**
     * ID of the user to add to the organization.
     */
    readonly invited_member_id: string | null;
    invited_on?: invited_on;
    /**
     * ID of the organization the user will be added to.
     */
    readonly organization_id: string;
    /**
     * Organization name.
     */
    readonly organization_name?: string;
    /**
     * Roles to be assigned to this user.
     */
    roles?: Array<schemas_role>;
};

