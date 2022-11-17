/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { origin_max_http_version_response_value } from '../models/origin_max_http_version_response_value';
import type { zone_settings_response_collection } from '../models/zone_settings_response_collection';
import type { zone_settings_response_single } from '../models/zone_settings_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all Zone settings
     * Available settings for your user in relation to a zone.
     * @returns zone_settings_response_collection Get all Zone settings response
     * @throws ApiError
     */
    public zoneSettingsGetAllZoneSettings({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit zone settings info
     * Edit settings for a zone.
     * @returns zone_settings_response_collection Edit zone settings info response
     * @throws ApiError
     */
    public zoneSettingsEditZoneSettingsInfo({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get 0-RTT session resumption setting
     * Gets 0-RTT session resumption setting.
     * @returns any Get 0-RTT session resumption setting response
     * @throws ApiError
     */
    public zoneSettingsGet0RttSessionResumptionSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/0rtt',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change 0-RTT session resumption setting
     * Changes the 0-RTT session resumption setting.
     * @returns any Change 0-RTT session resumption setting response
     * @throws ApiError
     */
    public zoneSettingsChange0RttSessionResumptionSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/0rtt',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Advanced DDOS setting
     * Advanced protection from Distributed Denial of Service (DDoS) attacks on your website. This is an uneditable value that is 'on' in the case of Business and Enterprise zones.
     * @returns any Get Advanced DDOS setting response
     * @throws ApiError
     */
    public zoneSettingsGetAdvancedDdosSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/advanced_ddos',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Get Always Online setting
     * When enabled, Cloudflare serves limited copies of web pages available from the [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is offline. Refer to [Always Online](https://developers.cloudflare.com/cache/about/always-online) for more information.
     * @returns any Get Always Online setting response
     * @throws ApiError
     */
    public zoneSettingsGetAlwaysOnlineSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/always_online',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Always Online setting
     * When enabled, Cloudflare serves limited copies of web pages available from the [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is offline. Refer to [Always Online](https://developers.cloudflare.com/cache/about/always-online) for more information.
     * @returns any Change Always Online setting response
     * @throws ApiError
     */
    public zoneSettingsChangeAlwaysOnlineSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/always_online',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Always Use HTTPS setting
     * Reply to all requests for URLs that use "http" with a 301 redirect to the equivalent "https" URL. If you only want to redirect for a subset of requests, consider creating an "Always use HTTPS" page rule.
     * @returns any Get Always Use HTTPS setting response
     * @throws ApiError
     */
    public zoneSettingsGetAlwaysUseHttpsSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/always_use_https',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Always Use HTTPS setting
     * Reply to all requests for URLs that use "http" with a 301 redirect to the equivalent "https" URL. If you only want to redirect for a subset of requests, consider creating an "Always use HTTPS" page rule.
     * @returns any Change Always Use HTTPS setting response
     * @throws ApiError
     */
    public zoneSettingsChangeAlwaysUseHttpsSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/always_use_https',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Automatic HTTPS Rewrites setting
     * Enable the Automatic HTTPS Rewrites feature for this zone.
     * @returns any Get Automatic HTTPS Rewrites setting response
     * @throws ApiError
     */
    public zoneSettingsGetAutomaticHttpsRewritesSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/automatic_https_rewrites',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Automatic HTTPS Rewrites setting
     * Enable the Automatic HTTPS Rewrites feature for this zone.
     * @returns any Change Automatic HTTPS Rewrites setting response
     * @throws ApiError
     */
    public zoneSettingsChangeAutomaticHttpsRewritesSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/automatic_https_rewrites',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Automatic Platform Optimization for WordPress settings
     * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/) serves your WordPress site from Cloudflare's edge network and caches third-party fonts.
     * @returns any Get Automatic Platform Optimization for WordPress settings response
     * @throws ApiError
     */
    public zoneSettingsGetAutomaticPlatformOptimizationForWordPressSettings({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/automatic_platform_optimization',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Automatic Platform Optimization for WordPress settings
     * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/) serves your WordPress site from Cloudflare's edge network and caches third-party fonts.
     * @returns any Change Automatic Platform Optimization for WordPress settings response
     * @throws ApiError
     */
    public zoneSettingsChangeAutomaticPlatformOptimizationForWordPressSettings({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/automatic_platform_optimization',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Brotli setting
     * When the client requesting an asset supports the Brotli compression algorithm, Cloudflare will serve a Brotli compressed version of the asset.
     * @returns any Get Brotli setting response
     * @throws ApiError
     */
    public zoneSettingsGetBrotliSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/brotli',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Brotli setting
     * When the client requesting an asset supports the Brotli compression algorithm, Cloudflare will serve a Brotli compressed version of the asset.
     * @returns any Change Brotli setting response
     * @throws ApiError
     */
    public zoneSettingsChangeBrotliSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/brotli',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Browser Cache TTL setting
     * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources will remain on your visitors' computers. Cloudflare will honor any larger times specified by your server. (https://support.cloudflare.com/hc/en-us/articles/200168276).
     * @returns any Get Browser Cache TTL setting response
     * @throws ApiError
     */
    public zoneSettingsGetBrowserCacheTtlSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/browser_cache_ttl',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Browser Cache TTL setting
     * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources will remain on your visitors' computers. Cloudflare will honor any larger times specified by your server. (https://support.cloudflare.com/hc/en-us/articles/200168276).
     * @returns any Change Browser Cache TTL setting response
     * @throws ApiError
     */
    public zoneSettingsChangeBrowserCacheTtlSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/browser_cache_ttl',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Browser Check setting
     * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP headers abused most commonly by spammers and denies access to your page.  It will also challenge visitors that do not have a user agent or a non standard user agent (also commonly used by abuse bots, crawlers or visitors). (https://support.cloudflare.com/hc/en-us/articles/200170086).
     * @returns any Get Browser Check setting response
     * @throws ApiError
     */
    public zoneSettingsGetBrowserCheckSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/browser_check',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Browser Check setting
     * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP headers abused most commonly by spammers and denies access to your page.  It will also challenge visitors that do not have a user agent or a non standard user agent (also commonly used by abuse bots, crawlers or visitors). (https://support.cloudflare.com/hc/en-us/articles/200170086).
     * @returns any Change Browser Check setting response
     * @throws ApiError
     */
    public zoneSettingsChangeBrowserCheckSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/browser_check',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Cache Level setting
     * Cache Level functions based off the setting level. The basic setting will cache most static resources (i.e., css, images, and JavaScript). The simplified setting will ignore the query string when delivering a cached resource. The aggressive setting will cache all static resources, including ones with a query string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
     * @returns any Get Cache Level setting response
     * @throws ApiError
     */
    public zoneSettingsGetCacheLevelSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/cache_level',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Cache Level setting
     * Cache Level functions based off the setting level. The basic setting will cache most static resources (i.e., css, images, and JavaScript). The simplified setting will ignore the query string when delivering a cached resource. The aggressive setting will cache all static resources, including ones with a query string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
     * @returns any Change Cache Level setting response
     * @throws ApiError
     */
    public zoneSettingsChangeCacheLevelSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/cache_level',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Challenge TTL setting
     * Specify how long a visitor is allowed access to your site after successfully completing a challenge (such as a CAPTCHA). After the TTL has expired the visitor will have to complete a new challenge. We recommend a 15 - 45 minute setting and will attempt to honor any setting above 45 minutes. (https://support.cloudflare.com/hc/en-us/articles/200170136).
     * @returns any Get Challenge TTL setting response
     * @throws ApiError
     */
    public zoneSettingsGetChallengeTtlSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/challenge_ttl',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Challenge TTL setting
     * Specify how long a visitor is allowed access to your site after successfully completing a challenge (such as a CAPTCHA). After the TTL has expired the visitor will have to complete a new challenge. We recommend a 15 - 45 minute setting and will attempt to honor any setting above 45 minutes. (https://support.cloudflare.com/hc/en-us/articles/200170136).
     * @returns any Change Challenge TTL setting response
     * @throws ApiError
     */
    public zoneSettingsChangeChallengeTtlSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/challenge_ttl',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get ciphers setting
     * Gets ciphers setting.
     * @returns any Get ciphers setting response
     * @throws ApiError
     */
    public zoneSettingsGetCiphersSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/ciphers',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change ciphers setting
     * Changes ciphers setting.
     * @returns any Change ciphers setting response
     * @throws ApiError
     */
    public zoneSettingsChangeCiphersSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/ciphers',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Development Mode setting
     * Development Mode temporarily allows you to enter development mode for your websites if you need to make changes to your site. This will bypass Cloudflare's accelerated cache and slow down your site, but is useful if you are making changes to cacheable content (like images, css, or JavaScript) and would like to see those changes right away. Once entered, development mode will last for 3 hours and then automatically toggle off.
     * @returns any Get Development Mode setting response
     * @throws ApiError
     */
    public zoneSettingsGetDevelopmentModeSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/development_mode',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Development Mode setting
     * Development Mode temporarily allows you to enter development mode for your websites if you need to make changes to your site. This will bypass Cloudflare's accelerated cache and slow down your site, but is useful if you are making changes to cacheable content (like images, css, or JavaScript) and would like to see those changes right away. Once entered, development mode will last for 3 hours and then automatically toggle off.
     * @returns any Change Development Mode setting response
     * @throws ApiError
     */
    public zoneSettingsChangeDevelopmentModeSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/development_mode',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Early Hints setting
     * When enabled, Cloudflare will attempt to speed up overall page loads by serving `103` responses with `Link` headers from the final response. Refer to [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for more information.
     * @returns any Get Early Hints setting response
     * @throws ApiError
     */
    public zoneSettingsGetEarlyHintsSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/early_hints',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Early Hints setting
     * When enabled, Cloudflare will attempt to speed up overall page loads by serving `103` responses with `Link` headers from the final response. Refer to [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for more information.
     * @returns any Change Early Hints setting response
     * @throws ApiError
     */
    public zoneSettingsChangeEarlyHintsSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/early_hints',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Email Obfuscation setting
     * Encrypt email adresses on your web page from bots, while keeping them visible to humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
     * @returns any Get Email Obfuscation setting response
     * @throws ApiError
     */
    public zoneSettingsGetEmailObfuscationSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/email_obfuscation',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Email Obfuscation setting
     * Encrypt email adresses on your web page from bots, while keeping them visible to humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
     * @returns any Change Email Obfuscation setting response
     * @throws ApiError
     */
    public zoneSettingsChangeEmailObfuscationSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/email_obfuscation',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get HTTP/2 Edge Prioritization setting
     * Gets HTTP/2 Edge Prioritization setting.
     * @returns any Get HTTP/2 Edge Prioritization setting response
     * @throws ApiError
     */
    public zoneSettingsGetHttp2EdgePrioritizationSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/h2_prioritization',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change HTTP/2 Edge Prioritization setting
     * Changes HTTP/2 Edge Prioritization setting.
     * @returns any Change HTTP/2 Edge Prioritization setting response
     * @throws ApiError
     */
    public zoneSettingsChangeHttp2EdgePrioritizationSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/h2_prioritization',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Hotlink Protection setting
     * When enabled, the Hotlink Protection option ensures that other sites cannot suck up your bandwidth by building pages that use images hosted on your site. Anytime a request for an image on your site hits Cloudflare, we check to ensure that it's not another site requesting them. People will still be able to download and view images from your page, but other sites won't be able to steal them for use on their own pages. (https://support.cloudflare.com/hc/en-us/articles/200170026).
     * @returns any Get Hotlink Protection setting response
     * @throws ApiError
     */
    public zoneSettingsGetHotlinkProtectionSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/hotlink_protection',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Hotlink Protection setting
     * When enabled, the Hotlink Protection option ensures that other sites cannot suck up your bandwidth by building pages that use images hosted on your site. Anytime a request for an image on your site hits Cloudflare, we check to ensure that it's not another site requesting them. People will still be able to download and view images from your page, but other sites won't be able to steal them for use on their own pages. (https://support.cloudflare.com/hc/en-us/articles/200170026).
     * @returns any Change Hotlink Protection setting response
     * @throws ApiError
     */
    public zoneSettingsChangeHotlinkProtectionSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/hotlink_protection',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get HTTP2 setting
     * Value of the HTTP2 setting.
     * @returns any Get HTTP2 setting response
     * @throws ApiError
     */
    public zoneSettingsGetHTTP2Setting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/http2',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change HTTP2 setting
     * Value of the HTTP2 setting.
     * @returns any Change HTTP2 setting response
     * @throws ApiError
     */
    public zoneSettingsChangeHTTP2Setting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/http2',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get HTTP3 setting
     * Value of the HTTP3 setting.
     * @returns any Get HTTP3 setting response
     * @throws ApiError
     */
    public zoneSettingsGetHTTP3Setting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/http3',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change HTTP3 setting
     * Value of the HTTP3 setting.
     * @returns any Change HTTP3 setting response
     * @throws ApiError
     */
    public zoneSettingsChangeHTTP3Setting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/http3',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Image Resizing setting
     * Image Resizing provides on-demand resizing, conversion and optimisation for images served through Cloudflare's network. Refer to the [Image Resizing documentation](https://developers.cloudflare.com/images/) for more information.
     * @returns any Get Image Resizing setting response
     * @throws ApiError
     */
    public zoneSettingsGetImageResizingSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/image_resizing',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Image Resizing setting
     * Image Resizing provides on-demand resizing, conversion and optimisation for images served through Cloudflare's network. Refer to the [Image Resizing documentation](https://developers.cloudflare.com/images/) for more information.
     * @returns any Change Image Resizing setting response
     * @throws ApiError
     */
    public zoneSettingsChangeImageResizingSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/image_resizing',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get IP Geolocation setting
     * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and pass the country code to you. (https://support.cloudflare.com/hc/en-us/articles/200168236).
     * @returns any Get IP Geolocation setting response
     * @throws ApiError
     */
    public zoneSettingsGetIpGeolocationSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/ip_geolocation',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change IP Geolocation setting
     * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and pass the country code to you. (https://support.cloudflare.com/hc/en-us/articles/200168236).
     * @returns any Change IP Geolocation setting response
     * @throws ApiError
     */
    public zoneSettingsChangeIpGeolocationSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/ip_geolocation',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get IPv6 setting
     * Enable IPv6 on all subdomains that are Cloudflare enabled.  (https://support.cloudflare.com/hc/en-us/articles/200168586).
     * @returns any Get IPv6 setting response
     * @throws ApiError
     */
    public zoneSettingsGetIPv6Setting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/ipv6',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change IPv6 setting
     * Enable IPv6 on all subdomains that are Cloudflare enabled.  (https://support.cloudflare.com/hc/en-us/articles/200168586).
     * @returns any Change IPv6 setting response
     * @throws ApiError
     */
    public zoneSettingsChangeIPv6Setting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/ipv6',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Minimum TLS Version setting
     * Gets Minimum TLS Version setting.
     * @returns any Get Minimum TLS Version setting response
     * @throws ApiError
     */
    public zoneSettingsGetMinimumTlsVersionSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/min_tls_version',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Minimum TLS Version setting
     * Changes Minimum TLS Version setting.
     * @returns any Change Minimum TLS Version setting response
     * @throws ApiError
     */
    public zoneSettingsChangeMinimumTlsVersionSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/min_tls_version',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Minify setting
     * Automatically minify certain assets for your website. Refer to [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196) for more information.
     * @returns any Get Minify setting response
     * @throws ApiError
     */
    public zoneSettingsGetMinifySetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/minify',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Minify setting
     * Automatically minify certain assets for your website. Refer to [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196) for more information.
     * @returns any Change Minify setting response
     * @throws ApiError
     */
    public zoneSettingsChangeMinifySetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/minify',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Mirage setting
     * Automatically optimize image loading for website visitors on mobile devices. Refer to [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more information.
     * @returns any Get Mirage setting response
     * @throws ApiError
     */
    public zoneSettingsGetMirageSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/mirage',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Mirage setting
     * Automatically optimize image loading for website visitors on mobile devices. Refer to [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more information.
     * @returns any Change Mirage setting response
     * @throws ApiError
     */
    public zoneSettingsChangeMirageSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/mirage',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Mobile Redirect setting
     * Automatically redirect visitors on mobile devices to a mobile-optimized subdomain. Refer to [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336) for more information.
     * @returns any Get Mobile Redirect setting response
     * @throws ApiError
     */
    public zoneSettingsGetMobileRedirectSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/mobile_redirect',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Mobile Redirect setting
     * Automatically redirect visitors on mobile devices to a mobile-optimized subdomain. Refer to [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336) for more information.
     * @returns any Change Mobile Redirect setting response
     * @throws ApiError
     */
    public zoneSettingsChangeMobileRedirectSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/mobile_redirect',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Network Error Logging setting
     * Enable Network Error Logging reporting on your zone. (Beta)
     * @returns any Get Network Error Logging setting response
     * @throws ApiError
     */
    public zoneSettingsGetNetworkErrorLoggingSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/nel',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Network Error Logging setting
     * Enable Network Error Logging reporting on your zone. (Beta)
     * @returns any Change Network Error Logging setting response
     * @throws ApiError
     */
    public zoneSettingsChangeNetworkErrorLoggingSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/nel',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Opportunistic Encryption setting
     * Gets Opportunistic Encryption setting.
     * @returns any Get Opportunistic Encryption setting response
     * @throws ApiError
     */
    public zoneSettingsGetOpportunisticEncryptionSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/opportunistic_encryption',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Opportunistic Encryption setting
     * Changes Opportunistic Encryption setting.
     * @returns any Change Opportunistic Encryption setting response
     * @throws ApiError
     */
    public zoneSettingsChangeOpportunisticEncryptionSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/opportunistic_encryption',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Opportunistic Onion setting
     * Add an Alt-Svc header to all legitimate requests from Tor, allowing the connection to use our onion services instead of exit nodes.
     * @returns any Get Opportunistic Onion setting response
     * @throws ApiError
     */
    public zoneSettingsGetOpportunisticOnionSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/opportunistic_onion',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Opportunistic Onion setting
     * Add an Alt-Svc header to all legitimate requests from Tor, allowing the connection to use our onion services instead of exit nodes.
     * @returns any Change Opportunistic Onion setting response
     * @throws ApiError
     */
    public zoneSettingsChangeOpportunisticOnionSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/opportunistic_onion',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Orange to Orange (O2O)
     * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also on Cloudflare.
     * @returns any Get Orange to Orange (O2O) response
     * @throws ApiError
     */
    public zoneSettingsGetOrangeToOrangeO2O({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/orange_to_orange',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Orange to Orange (O2O)
     * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also on Cloudflare.
     * @returns any Change Orange to Orange (O2O) response
     * @throws ApiError
     */
    public zoneSettingsChangeOrangeToOrangeO2O({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/orange_to_orange',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Enable Error Pages On setting
     * Cloudflare will proxy customer error pages on any 502,504 errors on origin server instead of showing a default Cloudflare error page. This does not apply to 522 errors and is limited to Enterprise Zones.
     * @returns any Get Enable Error Pages On setting response
     * @throws ApiError
     */
    public zoneSettingsGetEnableErrorPagesOnSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/origin_error_page_pass_thru',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Enable Error Pages On setting
     * Cloudflare will proxy customer error pages on any 502,504 errors on origin server instead of showing a default Cloudflare error page. This does not apply to 522 errors and is limited to Enterprise Zones.
     * @returns any Change Enable Error Pages On setting response
     * @throws ApiError
     */
    public zoneSettingsChangeEnableErrorPagesOnSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/origin_error_page_pass_thru',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Origin Max HTTP version setting
     * Value of the Origin Max HTTP version setting (Note that the default value for Enterprise is "1").
     * @returns any Get Origin Max HTTP version setting response
     * @throws ApiError
     */
    public zoneSettingsGetOriginMaxHttpVersionSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(zone_settings_response_single & origin_max_http_version_response_value)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/origin_max_http_version',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Origin Max HTTP version setting
     * The highest HTTP version Cloudflare will attempt to use with your origin. This setting allows Cloudflare to make HTTP/2 requests to your origin. (Refer to [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/), for more information.).
     * @returns any Change Origin Max HTTP version setting response
     * @throws ApiError
     */
    public zoneSettingsChangeOriginMaxHttpVersionSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(zone_settings_response_single & origin_max_http_version_response_value)> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/origin_max_http_version',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Polish setting
     * Removes metadata and compresses your images for faster page load times. Basic (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster image loading. Larger JPEGs are converted to progressive images, loading a lower-resolution image first and ending in a higher-resolution version. Not recommended for hi-res photography sites.
     * @returns any Get Polish setting response
     * @throws ApiError
     */
    public zoneSettingsGetPolishSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/polish',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Polish setting
     * Removes metadata and compresses your images for faster page load times. Basic (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster image loading. Larger JPEGs are converted to progressive images, loading a lower-resolution image first and ending in a higher-resolution version. Not recommended for hi-res photography sites.
     * @returns any Change Polish setting response
     * @throws ApiError
     */
    public zoneSettingsChangePolishSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/polish',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get prefetch preload setting
     * Cloudflare will prefetch any URLs that are included in the response headers. This is limited to Enterprise Zones.
     * @returns any Get prefetch preload setting response
     * @throws ApiError
     */
    public zoneSettingsGetPrefetchPreloadSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/prefetch_preload',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change prefetch preload setting
     * Cloudflare will prefetch any URLs that are included in the response headers. This is limited to Enterprise Zones.
     * @returns any Change prefetch preload setting response
     * @throws ApiError
     */
    public zoneSettingsChangePrefetchPreloadSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/prefetch_preload',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Privacy Pass setting
     * Privacy Pass is a browser extension developed by the Privacy Pass Team to improve the browsing experience for your visitors. Enabling Privacy Pass will reduce the number of CAPTCHAs shown to your visitors. (https://support.cloudflare.com/hc/en-us/articles/115001992652-Privacy-Pass).
     * @returns any Get Privacy Pass setting response
     * @throws ApiError
     */
    public zoneSettingsGetPrivacyPassSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/privacy_pass',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Privacy Pass setting
     * Privacy Pass is a browser extension developed by the Privacy Pass Team to improve the browsing experience for your visitors. Enabling Privacy Pass will reduce the number of CAPTCHAs shown to your visitors. (https://support.cloudflare.com/hc/en-us/articles/115001992652-Privacy-Pass).
     * @returns any Change Privacy Pass setting response
     * @throws ApiError
     */
    public zoneSettingsChangePrivacyPassSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/privacy_pass',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Proxy Read Timeout setting
     * Maximum time between two read operations from origin.
     * @returns any Get Proxy Read Timeout setting response
     * @throws ApiError
     */
    public zoneSettingsGetProxyReadTimeoutSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/proxy_read_timeout',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Proxy Read Timeout setting
     * Maximum time between two read operations from origin.
     * @returns any Change Proxy Read Timeout setting response
     * @throws ApiError
     */
    public zoneSettingsChangeProxyReadTimeoutSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/proxy_read_timeout',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Pseudo IPv4 setting
     * Value of the Pseudo IPv4 setting.
     * @returns any Get Pseudo IPv4 setting response
     * @throws ApiError
     */
    public zoneSettingsGetPseudoIPv4Setting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/pseudo_ipv4',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Pseudo IPv4 setting
     * Value of the Pseudo IPv4 setting.
     * @returns any Change Pseudo IPv4 setting response
     * @throws ApiError
     */
    public zoneSettingsChangePseudoIPv4Setting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/pseudo_ipv4',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Response Buffering setting
     * Enables or disables buffering of responses from the proxied server. Cloudflare may buffer the whole payload to deliver it at once to the client versus allowing it to be delivered in chunks. By default, the proxied server streams directly and is not buffered by Cloudflare. This is limited to Enterprise Zones.
     * @returns any Get Response Buffering setting response
     * @throws ApiError
     */
    public zoneSettingsGetResponseBufferingSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/response_buffering',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Response Buffering setting
     * Enables or disables buffering of responses from the proxied server. Cloudflare may buffer the whole payload to deliver it at once to the client versus allowing it to be delivered in chunks. By default, the proxied server streams directly and is not buffered by Cloudflare. This is limited to Enterprise Zones.
     * @returns any Change Response Buffering setting response
     * @throws ApiError
     */
    public zoneSettingsChangeResponseBufferingSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/response_buffering',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Rocket Loader setting
     * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that prioritises rendering your content while loading your site's Javascript asynchronously. Turning on Rocket Loader will immediately improve a web page's rendering time sometimes measured as Time to First Paint (TTFP), and also the `window.onload` time (assuming there is JavaScript on the page). This can have a positive impact on your Google search ranking. When turned on, Rocket Loader will automatically defer the loading of all Javascript referenced in your HTML, with no configuration required. Refer to [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056) for more information.
     * @returns any Get Rocket Loader setting response
     * @throws ApiError
     */
    public zoneSettingsGetRocketLoaderSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/rocket_loader',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Rocket Loader setting
     * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that prioritises rendering your content while loading your site's Javascript asynchronously. Turning on Rocket Loader will immediately improve a web page's rendering time sometimes measured as Time to First Paint (TTFP), and also the `window.onload` time (assuming there is JavaScript on the page). This can have a positive impact on your Google search ranking. When turned on, Rocket Loader will automatically defer the loading of all Javascript referenced in your HTML, with no configuration required. Refer to [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056) for more information.
     * @returns any Change Rocket Loader setting response
     * @throws ApiError
     */
    public zoneSettingsChangeRocketLoaderSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/rocket_loader',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Security Header (HSTS) setting
     * Cloudflare security header for a zone.
     * @returns any Get Security Header (HSTS) setting response
     * @throws ApiError
     */
    public zoneSettingsGetSecurityHeaderHstsSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/security_header',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Security Header (HSTS) setting
     * Cloudflare security header for a zone.
     * @returns any Change Security Header (HSTS) setting response
     * @throws ApiError
     */
    public zoneSettingsChangeSecurityHeaderHstsSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/security_header',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Security Level setting
     * Choose the appropriate security profile for your website, which will automatically adjust each of the security settings. If you choose to customize an individual security setting, the profile will become Custom. (https://support.cloudflare.com/hc/en-us/articles/200170056).
     * @returns any Get Security Level setting response
     * @throws ApiError
     */
    public zoneSettingsGetSecurityLevelSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/security_level',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Security Level setting
     * Choose the appropriate security profile for your website, which will automatically adjust each of the security settings. If you choose to customize an individual security setting, the profile will become Custom. (https://support.cloudflare.com/hc/en-us/articles/200170056).
     * @returns any Change Security Level setting response
     * @throws ApiError
     */
    public zoneSettingsChangeSecurityLevelSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/security_level',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Server Side Exclude setting
     * If there is sensitive content on your website that you want visible to real visitors, but that you want to hide from suspicious visitors, all you have to do is wrap the content with Cloudflare SSE tags. Wrap any content that you want to be excluded from suspicious visitors in the following SSE tags: <!--sse--><!--/sse-->. For example: <!--sse-->  Bad visitors won't see my phone number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you have HTML minification enabled, you won't see the SSE tags in your HTML source when it's served through Cloudflare. SSE will still function in this case, as Cloudflare's HTML minification and SSE functionality occur on-the-fly as the resource moves through our network to the visitor's computer. (https://support.cloudflare.com/hc/en-us/articles/200170036).
     * @returns any Get Server Side Exclude setting response
     * @throws ApiError
     */
    public zoneSettingsGetServerSideExcludeSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/server_side_exclude',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Server Side Exclude setting
     * If there is sensitive content on your website that you want visible to real visitors, but that you want to hide from suspicious visitors, all you have to do is wrap the content with Cloudflare SSE tags. Wrap any content that you want to be excluded from suspicious visitors in the following SSE tags: <!--sse--><!--/sse-->. For example: <!--sse-->  Bad visitors won't see my phone number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you have HTML minification enabled, you won't see the SSE tags in your HTML source when it's served through Cloudflare. SSE will still function in this case, as Cloudflare's HTML minification and SSE functionality occur on-the-fly as the resource moves through our network to the visitor's computer. (https://support.cloudflare.com/hc/en-us/articles/200170036).
     * @returns any Change Server Side Exclude setting response
     * @throws ApiError
     */
    public zoneSettingsChangeServerSideExcludeSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/server_side_exclude',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Enable Query String Sort setting
     * Cloudflare will treat files with the same query strings as the same file in cache, regardless of the order of the query strings. This is limited to Enterprise Zones.
     * @returns any Get Enable Query String Sort setting response
     * @throws ApiError
     */
    public zoneSettingsGetEnableQueryStringSortSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/sort_query_string_for_cache',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Enable Query String Sort setting
     * Cloudflare will treat files with the same query strings as the same file in cache, regardless of the order of the query strings. This is limited to Enterprise Zones.
     * @returns any Change Enable Query String Sort setting response
     * @throws ApiError
     */
    public zoneSettingsChangeEnableQueryStringSortSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/sort_query_string_for_cache',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get SSL setting
     * SSL encrypts your visitor's connection and safeguards credit card numbers and other personal data to and from your website. SSL can take up to 5 minutes to fully activate. Requires Cloudflare active on your root domain or www domain. Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare and your web server  (all HTTP traffic). Flexible: SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and your web server. You don't need to have an SSL cert on your web server, but your vistors will still see the site as being HTTPS enabled. Full:  SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and your web server. You'll need to have your own SSL cert or self-signed cert at the very least. Full (Strict): SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and your web server. You'll need to have a valid SSL certificate installed on your web server. This certificate must be signed by a certificate authority, have an expiration date in the future, and respond for the request domain name (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
     * @returns any Get SSL setting response
     * @throws ApiError
     */
    public zoneSettingsGetSslSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/ssl',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change SSL setting
     * SSL encrypts your visitor's connection and safeguards credit card numbers and other personal data to and from your website. SSL can take up to 5 minutes to fully activate. Requires Cloudflare active on your root domain or www domain. Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare and your web server  (all HTTP traffic). Flexible: SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and your web server. You don't need to have an SSL cert on your web server, but your vistors will still see the site as being HTTPS enabled. Full:  SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and your web server. You'll need to have your own SSL cert or self-signed cert at the very least. Full (Strict): SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and your web server. You'll need to have a valid SSL certificate installed on your web server. This certificate must be signed by a certificate authority, have an expiration date in the future, and respond for the request domain name (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
     * @returns any Change SSL setting response
     * @throws ApiError
     */
    public zoneSettingsChangeSslSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/ssl',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get SSL/TLS Recommender enrollment
     * Enrollment in the SSL/TLS Recommender service which tries to detect and recommend (by sending periodic emails) the most secure SSL/TLS setting your origin servers support.
     * @returns any Get SSL/TLS Recommender enrollment response
     * @throws ApiError
     */
    public zoneSettingsGetSslTlsRecommenderEnrollment({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/ssl_recommender',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change SSL/TLS Recommender enrollment
     * Enrollment in the SSL/TLS Recommender service which tries to detect and recommend (by sending periodic emails) the most secure SSL/TLS setting your origin servers support.
     * @returns any Change SSL/TLS Recommender enrollment response
     * @throws ApiError
     */
    public zoneSettingsChangeSslTlsRecommenderEnrollment({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/ssl_recommender',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get TLS 1.3 setting enabled for a zone
     * Gets TLS 1.3 setting enabled for a zone.
     * @returns any Get TLS 1.3 setting enabled for a zone response
     * @throws ApiError
     */
    public zoneSettingsGetTls13SettingEnabledForAZone({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/tls_1_3',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change TLS 1.3 setting
     * Changes TLS 1.3 setting.
     * @returns any Change TLS 1.3 setting response
     * @throws ApiError
     */
    public zoneSettingsChangeTls13Setting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/tls_1_3',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get TLS Client Auth setting
     * TLS Client Auth requires Cloudflare to connect to your origin server using a client certificate (Enterprise Only).
     * @returns any Get TLS Client Auth setting response
     * @throws ApiError
     */
    public zoneSettingsGetTlsClientAuthSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/tls_client_auth',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change TLS Client Auth setting
     * TLS Client Auth requires Cloudflare to connect to your origin server using a client certificate (Enterprise Only).
     * @returns any Change TLS Client Auth setting response
     * @throws ApiError
     */
    public zoneSettingsChangeTlsClientAuthSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/tls_client_auth',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get True Client IP setting
     * Allows customer to continue to use True Client IP (Akamai feature) in the headers we send to the origin. This is limited to Enterprise Zones.
     * @returns any Get True Client IP setting response
     * @throws ApiError
     */
    public zoneSettingsGetTrueClientIpSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/true_client_ip_header',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change True Client IP setting
     * Allows customer to continue to use True Client IP (Akamai feature) in the headers we send to the origin. This is limited to Enterprise Zones.
     * @returns any Change True Client IP setting response
     * @throws ApiError
     */
    public zoneSettingsChangeTrueClientIpSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/true_client_ip_header',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Web Application Firewall (WAF) setting
     * The WAF examines HTTP requests to your website.  It inspects both GET and POST requests and applies rules to help filter out illegitimate traffic from legitimate website visitors. The Cloudflare WAF inspects website addresses or URLs to detect anything out of the ordinary. If the Cloudflare WAF determines suspicious user behavior, then the WAF will 'challenge' the web visitor with a page that asks them to submit a CAPTCHA successfully  to continue their action. If the challenge is failed, the action will be stopped. What this means is that Cloudflare's WAF will block any traffic identified as illegitimate before it reaches your origin web server. (https://support.cloudflare.com/hc/en-us/articles/200172016).
     * @returns any Get Web Application Firewall (WAF) setting response
     * @throws ApiError
     */
    public zoneSettingsGetWebApplicationFirewallWafSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/waf',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Web Application Firewall (WAF) setting
     * The WAF examines HTTP requests to your website.  It inspects both GET and POST requests and applies rules to help filter out illegitimate traffic from legitimate website visitors. The Cloudflare WAF inspects website addresses or URLs to detect anything out of the ordinary. If the Cloudflare WAF determines suspicious user behavior, then the WAF will 'challenge' the web visitor with a page that asks them to submit a CAPTCHA successfully  to continue their action. If the challenge is failed, the action will be stopped. What this means is that Cloudflare's WAF will block any traffic identified as illegitimate before it reaches your origin web server. (https://support.cloudflare.com/hc/en-us/articles/200172016).
     * @returns any Change Web Application Firewall (WAF) setting response
     * @throws ApiError
     */
    public zoneSettingsChangeWebApplicationFirewallWafSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/waf',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get WebP setting
     * When the client requesting the image supports the WebP image codec, and WebP offers a performance advantage over the original image format, Cloudflare will serve a WebP version of the original image.
     * @returns any Get WebP setting response
     * @throws ApiError
     */
    public zoneSettingsGetWebPSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/webp',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change WebP setting
     * When the client requesting the image supports the WebP image codec, and WebP offers a performance advantage over the original image format, Cloudflare will serve a WebP version of the original image.
     * @returns any Change WebP setting response
     * @throws ApiError
     */
    public zoneSettingsChangeWebPSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/webp',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get WebSockets setting
     * Gets Websockets setting. For more information about Websockets, please refer to [Using Cloudflare with WebSockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Using-Cloudflare-with-WebSockets).
     * @returns any Get WebSockets setting response
     * @throws ApiError
     */
    public zoneSettingsGetWebSocketsSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/settings/websockets',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change WebSockets setting
     * Changes Websockets setting. For more information about Websockets, please refer to [Using Cloudflare with WebSockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Using-Cloudflare-with-WebSockets).
     * @returns any Change WebSockets setting response
     * @throws ApiError
     */
    public zoneSettingsChangeWebSocketsSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_settings_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/settings/websockets',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
