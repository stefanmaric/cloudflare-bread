/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pcaps_byte_limit } from './pcaps_byte_limit';
import type { pcaps_colo_name } from './pcaps_colo_name';
import type { pcaps_destination_conf } from './pcaps_destination_conf';
import type { pcaps_filter_v1 } from './pcaps_filter_v1';
import type { pcaps_packet_limit } from './pcaps_packet_limit';
import type { pcaps_system } from './pcaps_system';
import type { pcaps_time_limit } from './pcaps_time_limit';
import type { pcaps_type } from './pcaps_type';

export type pcaps_request_full = {
    byte_limit?: pcaps_byte_limit;
    colo_name: pcaps_colo_name;
    destination_conf: pcaps_destination_conf;
    filter_v1?: pcaps_filter_v1;
    packet_limit?: pcaps_packet_limit;
    system: pcaps_system;
    time_limit: pcaps_time_limit;
    type: pcaps_type;
};

