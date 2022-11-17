/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { labels } from './labels';
import type { max_rtt_ms } from './max_rtt_ms';
import type { mean_rtt_ms } from './mean_rtt_ms';
import type { min_rtt_ms } from './min_rtt_ms';
import type { packet_count } from './packet_count';
import type { schemas_asn } from './schemas_asn';
import type { std_dev_rtt_ms } from './std_dev_rtt_ms';
import type { traceroute_components_schemas_ip } from './traceroute_components_schemas_ip';
import type { traceroute_components_schemas_name } from './traceroute_components_schemas_name';

export type node_result = {
    asn?: schemas_asn;
    ip?: traceroute_components_schemas_ip;
    labels?: labels;
    max_rtt_ms?: max_rtt_ms;
    mean_rtt_ms?: mean_rtt_ms;
    min_rtt_ms?: min_rtt_ms;
    name?: traceroute_components_schemas_name;
    packet_count?: packet_count;
    std_dev_rtt_ms?: std_dev_rtt_ms;
};

