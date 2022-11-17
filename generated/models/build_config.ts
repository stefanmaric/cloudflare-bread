/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configs for the project build process.
 */
export type build_config = {
    /**
     * Command used to build project.
     */
    build_command?: string | null;
    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;
    /**
     * Directory to run the command.
     */
    root_dir?: string | null;
    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag?: string | null;
    /**
     * The auth token for analytics.
     */
    web_analytics_token?: string | null;
};

