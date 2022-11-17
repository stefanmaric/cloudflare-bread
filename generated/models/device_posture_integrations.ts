/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { config_response } from './config_response';
import type { device_posture_integrations_components_schemas_name } from './device_posture_integrations_components_schemas_name';
import type { device_posture_integrations_components_schemas_type } from './device_posture_integrations_components_schemas_type';
import type { device_posture_integrations_components_schemas_uuid } from './device_posture_integrations_components_schemas_uuid';
import type { schemas_interval } from './schemas_interval';

export type device_posture_integrations = {
    config?: config_response;
    id?: device_posture_integrations_components_schemas_uuid;
    interval?: schemas_interval;
    name?: device_posture_integrations_components_schemas_name;
    type?: device_posture_integrations_components_schemas_type;
};

