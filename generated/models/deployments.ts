/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { stage } from './stage';

export type deployments = {
    /**
     * A list of alias URLs pointing to this deployment.
     */
    readonly aliases?: Array<any> | null;
    readonly build_config?: any;
    /**
     * When the deployment was created.
     */
    readonly created_on?: string;
    /**
     * Info about what caused the deployment.
     */
    readonly deployment_trigger?: {
        /**
         * Additional info about the trigger.
         */
        metadata?: {
            /**
             * Where the trigger happened.
             */
            readonly branch?: string;
            /**
             * Hash of the deployment trigger commit.
             */
            readonly commit_hash?: string;
            /**
             * Message of the deployment trigger commit.
             */
            readonly commit_message?: string;
        };
        /**
         * What caused the deployment.
         */
        readonly type?: string;
    };
    /**
     * A dict of env variables to build this deploy.
     */
    readonly env_vars?: Record<string, any>;
    /**
     * Type of deploy.
     */
    readonly environment?: string;
    /**
     * Id of the deployment.
     */
    readonly id?: string;
    /**
     * If the deployment has been skipped.
     */
    readonly is_skipped?: boolean;
    readonly latest_stage?: any;
    /**
     * When the deployment was last modified.
     */
    readonly modified_on?: string;
    /**
     * Id of the project.
     */
    readonly project_id?: string;
    /**
     * Name of the project.
     */
    readonly project_name?: string;
    /**
     * Short Id (8 character) of the deployment.
     */
    readonly short_id?: string;
    readonly source?: any;
    /**
     * List of past stages.
     */
    readonly stages?: Array<stage>;
    /**
     * The live URL to view this deployment.
     */
    readonly url?: string;
};

