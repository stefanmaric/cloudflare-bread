/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Steering Policy for this load balancer.
 * - `"off"`: Use `default_pools`.
 * - `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
 * - `"random"`: Select a pool randomly.
 * - `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
 * - `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
 * - `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
 */
export type steering_policy = 'off' | 'geo' | 'random' | 'dynamic_latency' | 'proximity' | '""';
