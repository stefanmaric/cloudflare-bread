/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { component_values } from './component_values';
import type { currency } from './currency';
import type { current_period_end } from './current_period_end';
import type { current_period_start } from './current_period_start';
import type { frequency } from './frequency';
import type { price } from './price';
import type { rate_plan } from './rate_plan';
import type { state } from './state';
import type { subscription_v2_components_schemas_identifier } from './subscription_v2_components_schemas_identifier';
import type { zone } from './zone';

export type subscription_v2 = {
    app?: any;
    component_values?: component_values;
    currency?: currency;
    current_period_end?: current_period_end;
    current_period_start?: current_period_start;
    frequency?: frequency;
    id?: subscription_v2_components_schemas_identifier;
    price?: price;
    rate_plan?: rate_plan;
    state?: state;
    zone?: zone;
};

