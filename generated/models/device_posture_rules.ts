/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { device_posture_rules_components_schemas_description } from './device_posture_rules_components_schemas_description';
import type { device_posture_rules_components_schemas_name } from './device_posture_rules_components_schemas_name';
import type { device_posture_rules_components_schemas_type } from './device_posture_rules_components_schemas_type';
import type { device_posture_rules_components_schemas_uuid } from './device_posture_rules_components_schemas_uuid';
import type { schedule } from './schedule';
import type { schemas_expiration } from './schemas_expiration';
import type { schemas_input } from './schemas_input';
import type { schemas_match } from './schemas_match';

export type device_posture_rules = {
    description?: device_posture_rules_components_schemas_description;
    expiration?: schemas_expiration;
    id?: device_posture_rules_components_schemas_uuid;
    input?: schemas_input;
    match?: schemas_match;
    name?: device_posture_rules_components_schemas_name;
    schedule?: schedule;
    type?: device_posture_rules_components_schemas_type;
};

