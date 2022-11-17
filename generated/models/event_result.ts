/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { event_custom_page_html } from './event_custom_page_html';
import type { event_description } from './event_description';
import type { event_disable_session_renewal } from './event_disable_session_renewal';
import type { event_end_time } from './event_end_time';
import type { event_id } from './event_id';
import type { event_name } from './event_name';
import type { event_new_users_per_minute } from './event_new_users_per_minute';
import type { event_prequeue_start_time } from './event_prequeue_start_time';
import type { event_queueing_method } from './event_queueing_method';
import type { event_session_duration } from './event_session_duration';
import type { event_shuffle_at_event_start } from './event_shuffle_at_event_start';
import type { event_start_time } from './event_start_time';
import type { event_suspended } from './event_suspended';
import type { event_total_active_users } from './event_total_active_users';
import type { timestamp } from './timestamp';

export type event_result = {
    created_on?: timestamp;
    custom_page_html?: event_custom_page_html;
    description?: event_description;
    disable_session_renewal?: event_disable_session_renewal;
    event_end_time?: event_end_time;
    event_start_time?: event_start_time;
    id?: event_id;
    modified_on?: timestamp;
    name?: event_name;
    new_users_per_minute?: event_new_users_per_minute;
    prequeue_start_time?: event_prequeue_start_time;
    queueing_method?: event_queueing_method;
    session_duration?: event_session_duration;
    shuffle_at_event_start?: event_shuffle_at_event_start;
    suspended?: event_suspended;
    total_active_users?: event_total_active_users;
};

