/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { rule_action } from './rule_action';
import type { rule_description } from './rule_description';
import type { rule_enabled } from './rule_enabled';
import type { rule_expression } from './rule_expression';
import type { rule_id } from './rule_id';
import type { rule_version } from './rule_version';
import type { timestamp } from './timestamp';

export type rule_result = {
    action?: rule_action;
    description?: rule_description;
    enabled?: rule_enabled;
    expression?: rule_expression;
    id?: rule_id;
    last_updated?: timestamp;
    version?: rule_version;
};

