/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { mnm_rule_automatic_advertisement } from './mnm_rule_automatic_advertisement';
import type { mnm_rule_bandwidth_threshold } from './mnm_rule_bandwidth_threshold';
import type { mnm_rule_duration } from './mnm_rule_duration';
import type { mnm_rule_ip_prefixes } from './mnm_rule_ip_prefixes';
import type { mnm_rule_name } from './mnm_rule_name';
import type { mnm_rule_packet_threshold } from './mnm_rule_packet_threshold';
import type { schemas_rule_identifier } from './schemas_rule_identifier';

export type mnm_rule = {
    automatic_advertisement: mnm_rule_automatic_advertisement;
    bandwidth_threshold?: mnm_rule_bandwidth_threshold;
    duration: mnm_rule_duration;
    id?: schemas_rule_identifier;
    name: mnm_rule_name;
    packet_threshold?: mnm_rule_packet_threshold;
    prefixes: mnm_rule_ip_prefixes;
};

