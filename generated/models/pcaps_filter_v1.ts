/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The packet capture filter. When this field is empty, all packets are captured.
 */
export type pcaps_filter_v1 = {
    /**
     * The destination IP address of the packet.
     */
    destination_address?: string;
    /**
     * The destination port of the packet.
     */
    destination_port?: number;
    /**
     * The protocol number of the packet.
     */
    protocol?: number;
    /**
     * The source IP address of the packet.
     */
    source_address?: string;
    /**
     * The source port of the packet.
     */
    source_port?: number;
};

