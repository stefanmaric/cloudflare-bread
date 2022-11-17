/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Parameters specific to TCP health check.
 */
export type tcp_config = {
    /**
     * The TCP connection method to use for the health check.
     */
    method?: 'connection_established';
    /**
     * Port number to connect to for the health check. Defaults to 80.
     */
    port?: number;
};

