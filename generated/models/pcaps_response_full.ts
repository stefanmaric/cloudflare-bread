/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pcaps_byte_limit } from './pcaps_byte_limit';
import type { pcaps_colo_name } from './pcaps_colo_name';
import type { pcaps_destination_conf } from './pcaps_destination_conf';
import type { pcaps_error_message } from './pcaps_error_message';
import type { pcaps_filter_v1 } from './pcaps_filter_v1';
import type { pcaps_id } from './pcaps_id';
import type { pcaps_status } from './pcaps_status';
import type { pcaps_submitted } from './pcaps_submitted';
import type { pcaps_system } from './pcaps_system';
import type { pcaps_time_limit } from './pcaps_time_limit';
import type { pcaps_type } from './pcaps_type';

export type pcaps_response_full = {
    byte_limit?: pcaps_byte_limit;
    colo_name?: pcaps_colo_name;
    destination_conf?: pcaps_destination_conf;
    error_message?: pcaps_error_message;
    filter_v1?: pcaps_filter_v1;
    id?: pcaps_id;
    status?: pcaps_status;
    submitted?: pcaps_submitted;
    system?: pcaps_system;
    time_limit?: pcaps_time_limit;
    type?: pcaps_type;
};

