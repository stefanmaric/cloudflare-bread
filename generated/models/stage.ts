/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The status of the deployment.
 */
export type stage = {
    /**
     * When the stage ended.
     */
    readonly ended_on?: string | null;
    /**
     * The current build stage.
     */
    name?: string;
    /**
     * When the stage started.
     */
    readonly started_on?: string | null;
    /**
     * State of the current stage.
     */
    readonly status?: string;
};

