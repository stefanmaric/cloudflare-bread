/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { alert_body } from './alert_body';
import type { history_components_schemas_description } from './history_components_schemas_description';
import type { history_components_schemas_name } from './history_components_schemas_name';
import type { mechanism } from './mechanism';
import type { mechanism_type } from './mechanism_type';
import type { schemas_alert_type } from './schemas_alert_type';
import type { sent } from './sent';
import type { uuid } from './uuid';

export type history = {
    alert_body?: alert_body;
    alert_type?: schemas_alert_type;
    description?: history_components_schemas_description;
    id?: uuid;
    mechanism?: mechanism;
    mechanism_type?: mechanism_type;
    name?: history_components_schemas_name;
    sent?: sent;
};

