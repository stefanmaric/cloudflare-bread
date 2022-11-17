/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allow_insecure } from './allow_insecure';
import type { components_schemas_port } from './components_schemas_port';
import type { expected_body } from './expected_body';
import type { expected_codes } from './expected_codes';
import type { follow_redirects } from './follow_redirects';
import type { header } from './header';
import type { interval } from './interval';
import type { monitor_components_schemas_description } from './monitor_components_schemas_description';
import type { monitor_components_schemas_identifier } from './monitor_components_schemas_identifier';
import type { monitor_components_schemas_type } from './monitor_components_schemas_type';
import type { path } from './path';
import type { retries } from './retries';
import type { schemas_method } from './schemas_method';
import type { schemas_timeout } from './schemas_timeout';
import type { timestamp } from './timestamp';

export type monitor = {
    allow_insecure?: allow_insecure;
    created_on?: timestamp;
    description?: monitor_components_schemas_description;
    expected_body?: expected_body;
    expected_codes?: expected_codes;
    follow_redirects?: follow_redirects;
    header?: header;
    id?: monitor_components_schemas_identifier;
    interval?: interval;
    method?: schemas_method;
    modified_on?: timestamp;
    path?: path;
    port?: components_schemas_port;
    retries?: retries;
    timeout?: schemas_timeout;
    type?: monitor_components_schemas_type;
};

