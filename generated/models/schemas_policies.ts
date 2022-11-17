/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { approval_groups } from './approval_groups';
import type { approval_required } from './approval_required';
import type { components_schemas_uuid } from './components_schemas_uuid';
import type { decision } from './decision';
import type { include } from './include';
import type { policies_components_schemas_name } from './policies_components_schemas_name';
import type { precedence } from './precedence';
import type { purpose_justification_prompt } from './purpose_justification_prompt';
import type { purpose_justification_required } from './purpose_justification_required';
import type { schemas_exclude } from './schemas_exclude';
import type { schemas_require } from './schemas_require';
import type { timestamp } from './timestamp';

export type schemas_policies = {
    approval_groups?: approval_groups;
    approval_required?: approval_required;
    created_at?: timestamp;
    decision?: decision;
    exclude?: schemas_exclude;
    id?: components_schemas_uuid;
    include?: include;
    name?: policies_components_schemas_name;
    precedence?: precedence;
    purpose_justification_prompt?: purpose_justification_prompt;
    purpose_justification_required?: purpose_justification_required;
    require?: schemas_require;
    updated_at?: timestamp;
};

