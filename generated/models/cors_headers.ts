/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allow_all_headers } from './allow_all_headers';
import type { allow_all_methods } from './allow_all_methods';
import type { allow_all_origins } from './allow_all_origins';
import type { allow_credentials } from './allow_credentials';
import type { allowed_headers } from './allowed_headers';
import type { allowed_methods } from './allowed_methods';
import type { allowed_origins } from './allowed_origins';
import type { max_age } from './max_age';

export type cors_headers = {
    allow_all_headers?: allow_all_headers;
    allow_all_methods?: allow_all_methods;
    allow_all_origins?: allow_all_origins;
    allow_credentials?: allow_credentials;
    allowed_headers?: allowed_headers;
    allowed_methods?: allowed_methods;
    allowed_origins?: allowed_origins;
    max_age?: max_age;
};

