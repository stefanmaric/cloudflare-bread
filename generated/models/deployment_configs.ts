/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configs for deployments in a project.
 */
export type deployment_configs = {
    /**
     * Configs for preview deploys.
     */
    preview?: {
        /**
         * Compatibility date used for Pages Functions.
         */
        compatibility_date?: string;
        /**
         * Compatibility flags used for Pages Functions.
         */
        compatibility_flags?: Array<any>;
        /**
         * D1 databases used for Pages Functions.
         */
        d1_databases?: {
            /**
             * D1 binding.
             */
            D1_BINDING?: {
                /**
                 * UUID of the D1 database.
                 */
                id?: string;
            };
        };
        /**
         * Durabble Object namespaces used for Pages Functions.
         */
        durable_object_namespaces?: {
            /**
             * Durabble Object binding.
             */
            DO_BINDING?: {
                /**
                 * ID of the Durabble Object namespace.
                 */
                namespace_id?: string;
            };
        };
        /**
         * Environment variables for build configs.
         */
        env_vars?: {
            /**
             * Environment variable.
             */
            BUILD_VERSION?: {
                /**
                 * Environment variable value.
                 */
                value?: string;
            };
        } | null;
        /**
         * KV namespaces used for Pages Functions.
         */
        kv_namespaces?: {
            /**
             * KV binding.
             */
            KV_BINDING?: {
                /**
                 * ID of the KV namespace.
                 */
                namespace_id?: string;
            };
        };
        /**
         * R2 buckets used for Pages Functions.
         */
        r2_buckets?: {
            /**
             * R2 binding.
             */
            R2_BINDING?: {
                /**
                 * Name of the R2 bucket.
                 */
                name?: string;
            };
        };
    };
    /**
     * Configs for production deploys.
     */
    production?: {
        /**
         * Compatibility date used for Pages Functions.
         */
        compatibility_date?: string;
        /**
         * Compatibility flags used for Pages Functions.
         */
        compatibility_flags?: Array<any>;
        /**
         * D1 databases used for Pages Functions.
         */
        d1_databases?: {
            /**
             * D1 binding.
             */
            D1_BINDING?: {
                /**
                 * UUID of the D1 database.
                 */
                id?: string;
            };
        };
        /**
         * Durabble Object namespaces used for Pages Functions.
         */
        durable_object_namespaces?: {
            /**
             * Durabble Object binding.
             */
            DO_BINDING?: {
                /**
                 * ID of the Durabble Object namespace.
                 */
                namespace_id?: string;
            };
        };
        /**
         * Environment variables for build configs.
         */
        env_vars?: {
            /**
             * Environment variable.
             */
            BUILD_VERSION?: {
                /**
                 * Environment variable value.
                 */
                value?: string;
            };
        } | null;
        /**
         * KV namespaces used for Pages Functions.
         */
        kv_namespaces?: {
            /**
             * KV binding.
             */
            KV_BINDING?: {
                /**
                 * ID of the KV namespace.
                 */
                namespace_id?: string;
            };
        };
        /**
         * R2 buckets used for Pages Functions.
         */
        r2_buckets?: {
            /**
             * R2 binding.
             */
            R2_BINDING?: {
                /**
                 * Name of the R2 bucket.
                 */
                name?: string;
            };
        };
    };
};

