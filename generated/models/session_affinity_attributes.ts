/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configures cookie attributes for session affinity cookie.
 */
export type session_affinity_attributes = {
    /**
     * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
     */
    drain_duration?: number;
    /**
     * Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
     */
    samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';
    /**
     * Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
     */
    secure?: 'Auto' | 'Always' | 'Never';
    /**
     * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. Value "none" means no failover takes place for sessions pinned to the origin (default). Value "temporary" means traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. Value "sticky" means the session affinity cookie is updated and subsequent requests are sent to the new origin. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance.
     */
    zero_downtime_failover?: 'none' | 'temporary' | 'sticky';
};

