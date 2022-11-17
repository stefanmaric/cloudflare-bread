/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { firewall_rules_components_schemas_action } from './firewall_rules_components_schemas_action';
import type { firewall_rules_components_schemas_description } from './firewall_rules_components_schemas_description';
import type { firewall_rules_components_schemas_id } from './firewall_rules_components_schemas_id';
import type { firewall_rules_components_schemas_paused } from './firewall_rules_components_schemas_paused';
import type { firewall_rules_components_schemas_priority } from './firewall_rules_components_schemas_priority';
import type { products } from './products';
import type { ref } from './ref';

export type filter_rule_base = {
    action?: firewall_rules_components_schemas_action;
    description?: firewall_rules_components_schemas_description;
    id?: firewall_rules_components_schemas_id;
    paused?: firewall_rules_components_schemas_paused;
    priority?: firewall_rules_components_schemas_priority;
    products?: products;
    ref?: ref;
};

