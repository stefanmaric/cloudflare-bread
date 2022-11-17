/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type schemas_health_check = {
    /**
     * Determines whether to run healthchecks for a tunnel.
     */
    enabled?: boolean;
    /**
     * The address used to run healthchecks for a tunnel.
     */
    target?: string;
    /**
     * The type of healthcheck to run, reply or request. The default value is `reply`.
     */
    type?: 'reply' | 'request';
};

