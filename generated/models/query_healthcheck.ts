/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_interval } from './components_schemas_interval';
import type { consecutive_fails } from './consecutive_fails';
import type { consecutive_successes } from './consecutive_successes';
import type { healthchecks_components_schemas_description } from './healthchecks_components_schemas_description';
import type { healthchecks_components_schemas_name } from './healthchecks_components_schemas_name';
import type { healthchecks_components_schemas_type } from './healthchecks_components_schemas_type';
import type { http_config } from './http_config';
import type { retries } from './retries';
import type { schemas_address } from './schemas_address';
import type { schemas_check_regions } from './schemas_check_regions';
import type { schemas_timeout } from './schemas_timeout';
import type { suspended } from './suspended';
import type { tcp_config } from './tcp_config';

export type query_healthcheck = {
    address: schemas_address;
    check_regions?: schemas_check_regions;
    consecutive_fails?: consecutive_fails;
    consecutive_successes?: consecutive_successes;
    description?: healthchecks_components_schemas_description;
    http_config?: http_config;
    interval?: components_schemas_interval;
    name: healthchecks_components_schemas_name;
    retries?: retries;
    suspended?: suspended;
    tcp_config?: tcp_config;
    timeout?: schemas_timeout;
    type?: healthchecks_components_schemas_type;
};

