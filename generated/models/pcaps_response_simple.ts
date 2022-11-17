/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pcaps_filter_v1 } from './pcaps_filter_v1';
import type { pcaps_id } from './pcaps_id';
import type { pcaps_status } from './pcaps_status';
import type { pcaps_submitted } from './pcaps_submitted';
import type { pcaps_system } from './pcaps_system';
import type { pcaps_time_limit } from './pcaps_time_limit';
import type { pcaps_type } from './pcaps_type';

export type pcaps_response_simple = {
    filter_v1?: pcaps_filter_v1;
    id?: pcaps_id;
    status?: pcaps_status;
    submitted?: pcaps_submitted;
    system?: pcaps_system;
    time_limit?: pcaps_time_limit;
    type?: pcaps_type;
};

