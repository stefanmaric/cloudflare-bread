/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { action } from './action';
import type { amount } from './amount';
import type { billing_history_components_schemas_identifier } from './billing_history_components_schemas_identifier';
import type { currency } from './currency';
import type { occurred_at } from './occurred_at';
import type { schemas_description } from './schemas_description';
import type { schemas_zone } from './schemas_zone';
import type { type } from './type';

export type billing_history = {
    action: action;
    amount: amount;
    currency: currency;
    description: schemas_description;
    id: billing_history_components_schemas_identifier;
    occurred_at: occurred_at;
    type: type;
    zone: schemas_zone;
};

