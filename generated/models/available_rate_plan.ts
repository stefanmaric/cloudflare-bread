/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { can_subscribe } from './can_subscribe';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { currency } from './currency';
import type { externally_managed } from './externally_managed';
import type { is_subscribed } from './is_subscribed';
import type { legacy_discount } from './legacy_discount';
import type { legacy_id } from './legacy_id';
import type { rate_plan_components_schemas_name } from './rate_plan_components_schemas_name';
import type { schemas_frequency } from './schemas_frequency';
import type { schemas_price } from './schemas_price';

export type available_rate_plan = {
    can_subscribe?: can_subscribe;
    currency?: currency;
    externally_managed?: externally_managed;
    frequency?: schemas_frequency;
    id?: common_components_schemas_identifier;
    is_subscribed?: is_subscribed;
    legacy_discount?: legacy_discount;
    legacy_id?: legacy_id;
    name?: rate_plan_components_schemas_name;
    price?: schemas_price;
};

