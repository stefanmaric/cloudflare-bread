/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { anomaly_rule } from './anomaly_rule';
import type { traditional_allow_rule } from './traditional_allow_rule';
import type { traditional_deny_rule } from './traditional_deny_rule';

export type components_schemas_rule = (anomaly_rule | traditional_deny_rule | traditional_allow_rule);

