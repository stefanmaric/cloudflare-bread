/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { build_config } from './build_config';
import type { deployment_configs } from './deployment_configs';
import type { deployments } from './deployments';

export type projects = {
    build_config?: build_config;
    /**
     * Most recent deployment to the repo.
     */
    readonly canonical_deployment?: deployments;
    /**
     * When the project was created.
     */
    readonly created_on?: string;
    deployment_configs?: deployment_configs;
    /**
     * A list of associated custom domains for the project.
     */
    readonly domains?: Array<any>;
    /**
     * Id of the project.
     */
    readonly id?: string;
    /**
     * Most recent deployment to the repo.
     */
    readonly latest_deployment?: deployments;
    /**
     * Name of the project.
     */
    name?: string;
    /**
     * Production branch of the project. Used to identify production deployments.
     */
    production_branch?: string;
    readonly source?: any;
    /**
     * The Cloudflare subdomain associated with the project.
     */
    readonly subdomain?: string;
};

