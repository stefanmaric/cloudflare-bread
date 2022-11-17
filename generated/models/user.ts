/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { email } from './email';
import type { uuid } from './uuid';

export type user = {
    email?: email;
    id?: uuid;
    /**
     * The enrolled device user's name.
     */
    name?: string;
};

