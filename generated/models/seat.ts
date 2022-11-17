/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { access_seat } from './access_seat';
import type { gateway_seat } from './gateway_seat';
import type { seat_uid } from './seat_uid';

export type seat = {
    access_seat: access_seat;
    gateway_seat: gateway_seat;
    seat_uid: seat_uid;
};

