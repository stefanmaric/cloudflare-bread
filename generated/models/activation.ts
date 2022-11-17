/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { activated_on } from './activated_on';
import type { activation_key } from './activation_key';
import type { build } from './build';
import type { railgun_components_schemas_version } from './railgun_components_schemas_version';
import type { revision } from './revision';

export type activation = {
    activated_on?: activated_on;
    key: activation_key;
    version?: {
        build?: build;
        number: railgun_components_schemas_version;
        revision?: revision;
    };
};

