/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allow_insecure } from './allow_insecure';
import type { consecutive_down } from './consecutive_down';
import type { consecutive_up } from './consecutive_up';
import type { expected_body } from './expected_body';
import type { follow_redirects } from './follow_redirects';
import type { header } from './header';
import type { interval } from './interval';
import type { monitor_components_schemas_description } from './monitor_components_schemas_description';
import type { monitor_components_schemas_identifier } from './monitor_components_schemas_identifier';
import type { monitor_components_schemas_port } from './monitor_components_schemas_port';
import type { monitor_components_schemas_type } from './monitor_components_schemas_type';
import type { path } from './path';
import type { probe_zone } from './probe_zone';
import type { retries } from './retries';
import type { schemas_expected_codes } from './schemas_expected_codes';
import type { schemas_method } from './schemas_method';
import type { schemas_timeout } from './schemas_timeout';
import type { timestamp } from './timestamp';

export type components_schemas_monitor = {
    allow_insecure?: allow_insecure;
    consecutive_down?: consecutive_down;
    consecutive_up?: consecutive_up;
    created_on?: timestamp;
    description?: monitor_components_schemas_description;
    expected_body?: expected_body;
    expected_codes?: schemas_expected_codes;
    follow_redirects?: follow_redirects;
    header?: header;
    id?: monitor_components_schemas_identifier;
    interval?: interval;
    method?: schemas_method;
    modified_on?: timestamp;
    path?: path;
    port?: monitor_components_schemas_port;
    probe_zone?: probe_zone;
    retries?: retries;
    timeout?: schemas_timeout;
    type?: monitor_components_schemas_type;
};

