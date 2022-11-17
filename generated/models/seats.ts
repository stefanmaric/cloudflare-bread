/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { access_seat } from './access_seat';
import type { gateway_seat } from './gateway_seat';
import type { seat_uid } from './seat_uid';
import type { timestamp } from './timestamp';

export type seats = {
    access_seat?: access_seat;
    created_at?: timestamp;
    gateway_seat?: gateway_seat;
    seat_uid?: seat_uid;
    updated_at?: timestamp;
};

