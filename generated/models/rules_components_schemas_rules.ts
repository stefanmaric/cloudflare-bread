/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deleted_at } from './deleted_at';
import type { device_posture } from './device_posture';
import type { identity } from './identity';
import type { rule_settings } from './rule_settings';
import type { rules_components_schemas_action_2 } from './rules_components_schemas_action_2';
import type { rules_components_schemas_description_2 } from './rules_components_schemas_description_2';
import type { rules_components_schemas_enabled_3 } from './rules_components_schemas_enabled_3';
import type { rules_components_schemas_name_2 } from './rules_components_schemas_name_2';
import type { rules_components_schemas_uuid } from './rules_components_schemas_uuid';
import type { schemas_filters } from './schemas_filters';
import type { schemas_precedence } from './schemas_precedence';
import type { timestamp } from './timestamp';
import type { traffic } from './traffic';

export type rules_components_schemas_rules = {
    action?: rules_components_schemas_action_2;
    created_at?: timestamp;
    deleted_at?: deleted_at;
    description?: rules_components_schemas_description_2;
    device_posture?: device_posture;
    enabled?: rules_components_schemas_enabled_3;
    filters?: schemas_filters;
    id?: rules_components_schemas_uuid;
    identity?: identity;
    name?: rules_components_schemas_name_2;
    precedence?: schemas_precedence;
    rule_settings?: rule_settings;
    traffic?: traffic;
    updated_at?: timestamp;
};

