/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bot_class } from '../models/bot_class';
import type { device_type } from '../models/device_type';
import type { http_protocol } from '../models/http_protocol';
import type { http_version } from '../models/http_version';
import type { ip_version } from '../models/ip_version';
import type { tls_version } from '../models/tls_version';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RadarHttpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a summary of bot classes
     * Percentage distribution of traffic classified as automated or human.
     * @returns any Get a summary of bot classes response
     * @throws ApiError
     */
    public radarHttpGetASummaryOfBotClasses(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            summary_0?: {
                bot?: string;
                human?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/summary/bot_class',
        });
    }

    /**
     * Get a summary of device types
     * Percentage distribution of traffic per device type.
     * @returns any Get a summary of device types response
     * @throws ApiError
     */
    public radarHttpGetASummaryOfDeviceTypes(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            summary_0?: {
                desktop?: string;
                mobile?: string;
                other?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/summary/device_type',
        });
    }

    /**
     * Get a summary of HTTP protocols
     * Percentage distribution of traffic per HTTP protocol.
     * @returns any Get a summary of HTTP protocols response
     * @throws ApiError
     */
    public radarHttpGetASummaryOfHttpProtocols(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            summary_0?: {
                http?: string;
                https?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/summary/http_protocol',
        });
    }

    /**
     * Get a summary of HTTP versions
     * Percentage distribution of traffic per HTTP protocol version.
     * @returns any Get a summary of HTTP versions response
     * @throws ApiError
     */
    public radarHttpGetASummaryOfHttpVersions(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            summary_0?: {
                'HTTP/1.x'?: string;
                'HTTP/2'?: string;
                'HTTP/3'?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/summary/http_version',
        });
    }

    /**
     * Get a summary of IP versions
     * Percentage distribution of traffic per IP protocol version.
     * @returns any Get a summary of IP versions response
     * @throws ApiError
     */
    public radarHttpGetASummaryOfIpVersions(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            summary_0?: {
                IPv4?: string;
                IPv6?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/summary/ip_version',
        });
    }

    /**
     * Get a summary of TLS versions
     * Percentage distribution of traffic per TLS protocol version.
     * @returns any Get a summary of TLS versions response
     * @throws ApiError
     */
    public radarHttpGetASummaryOfTlsVersions(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            summary_0?: {
                'TLS 1.0'?: string;
                'TLS 1.1'?: string;
                'TLS 1.2'?: string;
                'TLS 1.3'?: string;
                'TLS QUIC'?: string;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/summary/tls_version',
        });
    }

    /**
     * Get time series of bot classes
     * Percentage distribution of traffic classified as automated or human over time.
     * @returns any Get time series of bot classes response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfBotClasses(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                bot?: Array<string>;
                human?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/bot_class',
        });
    }

    /**
     * Get time series of user agents
     * Percentage distribution of traffic of the top user agents in the selected time range, over time.
     * @returns any Get time series of user agents response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfUserAgents(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                '<browser name>'?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/browser',
        });
    }

    /**
     * Get time series of user agents aggregated in families
     * Percentage distribution of traffic of the top user agents aggregated in families in the selected time range, over time.
     * @returns any Get time series of user agents aggregated in families response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfUserAgentsAggregatedInFamilies(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                '<browser name>'?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/browser_family',
        });
    }

    /**
     * Get time series of device types
     * Percentage distribution of traffic per device type over time.
     * @returns any Get time series of device types response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfDeviceTypes(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                desktop?: Array<string>;
                mobile?: Array<string>;
                other?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/device_type',
        });
    }

    /**
     * Get time series of HTTP protocols
     * Percentage distribution of traffic per HTTP protocol over time.
     * @returns any Get time series of HTTP protocols response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfHttpProtocols(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                http?: Array<string>;
                https?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/http_protocol',
        });
    }

    /**
     * Get time series of HTTP versions
     * Percentage distribution of traffic per HTTP protocol version over time.
     * @returns any Get time series of HTTP versions response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfHttpVersions(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                'HTTP/1.x'?: Array<string>;
                'HTTP/2'?: Array<string>;
                'HTTP/3'?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/http_version',
        });
    }

    /**
     * Get time series of IP versions
     * Percentage distribution of traffic per IP protocol version over time.
     * @returns any Get time series of IP versions response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfIpVersions(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                IPv4?: Array<string>;
                IPv6?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/ip_version',
        });
    }

    /**
     * Get time series of TLS versions
     * Percentage distribution of traffic per TLS protocol version over time.
     * @returns any Get time series of TLS versions response
     * @throws ApiError
     */
    public radarHttpGetTimeSeriesOfTlsVersions(): CancelablePromise<{
        result?: {
            meta?: Record<string, any>;
            serie_0?: {
                'TLS 1.0'?: Array<string>;
                'TLS 1.1'?: Array<string>;
                'TLS 1.2'?: Array<string>;
                'TLS 1.3'?: Array<string>;
                'TLS QUIC'?: Array<string>;
                timestamps?: Array<string>;
            };
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/timeseries/tls_version',
        });
    }

    /**
     * Get top autonomous systems by HTTP requests
     * Get the top autonomous systems (AS) by HTTP traffic. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by HTTP requests response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByHttpRequests(): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases',
        });
    }

    /**
     * Get top autonomous systems by bot class
     * Get the top autonomous systems (AS), by HTTP traffic, of the requested bot class. These two categories use Cloudflare's bot score - refer to [Bot Scores](https://developers.cloudflare.com/bots/concepts/bot-score) for more information. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by bot class response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByBotClass({
        botClass,
    }: {
        botClass: bot_class,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases/bot_class/{bot_class}',
            path: {
                'bot_class': botClass,
            },
        });
    }

    /**
     * Get top autonomous systems by device type
     * Get the top autonomous systems (AS), by HTTP traffic, of the requested device type. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by device type response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByDeviceType({
        deviceType,
    }: {
        deviceType: device_type,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases/device_type/{device_type}',
            path: {
                'device_type': deviceType,
            },
        });
    }

    /**
     * Get top autonomous systems by HTTP protocol
     * Get the top autonomous systems (AS), by HTTP traffic, of the requested HTTP protocol. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by HTTP protocol response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByHttpProtocol({
        httpProtocol,
    }: {
        httpProtocol: http_protocol,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases/http_protocol/{http_protocol}',
            path: {
                'http_protocol': httpProtocol,
            },
        });
    }

    /**
     * Get top autonomous systems by HTTP version
     * Get the top autonomous systems (AS), by HTTP traffic, of the requested HTTP protocol version. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by HTTP version response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByHttpVersion({
        httpVersion,
    }: {
        httpVersion: http_version,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases/http_version/{http_version}',
            path: {
                'http_version': httpVersion,
            },
        });
    }

    /**
     * Get top autonomous systems by IP version
     * Get the top autonomous systems, by HTTP traffic, of the requested IP protocol version. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by IP version response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByIpVersion({
        ipVersion,
    }: {
        ipVersion: ip_version,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases/ip_version/{ip_version}',
            path: {
                'ip_version': ipVersion,
            },
        });
    }

    /**
     * Get top autonomous systems by TLS version
     * Get the top autonomous systems (AS), by HTTP traffic, of the requested TLS protocol version. Values are a percentage out of the total traffic.
     * @returns any Get top autonomous systems by TLS version response
     * @throws ApiError
     */
    public radarHttpGetTopAutonomousSystemsByTlsVersion({
        tlsVersion,
    }: {
        tlsVersion: tls_version,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientASN?: string;
                clientASName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/ases/tls_version/{tls_version}',
            path: {
                'tls_version': tlsVersion,
            },
        });
    }

    /**
     * Get top user agents aggregated in families by HTTP requests
     * Get the top user agents aggregated in families by HTTP traffic. Values are a percentage out of the total traffic.
     * @returns any Get top user agents aggregated in families by HTTP requests response
     * @throws ApiError
     */
    public radarHttpGetTopUserAgentsAggregatedInFamiliesByHttpRequests(): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                '<browser name>'?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/browser_families',
        });
    }

    /**
     * Get top user agents by HTTP requests
     * Get the top user agents by HTTP traffic. Values are a percentage out of the total traffic.
     * @returns any Get top user agents by HTTP requests response
     * @throws ApiError
     */
    public radarHttpGetTopUserAgentsByHttpRequests(): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                '<browser name>'?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/browsers',
        });
    }

    /**
     * Get top locations by HTTP requests
     * Get the top locations by HTTP traffic. Values are a percentage out of the total traffic.
     * @returns any Get top locations by HTTP requests response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByHttpRequests(): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations',
        });
    }

    /**
     * Get top locations by bot class
     * Get the top locations, by HTTP traffic, of the requested bot class. These two categories use Cloudflare's bot score - refer to [Bot scores])https://developers.cloudflare.com/bots/concepts/bot-score). Values are a percentage out of the total traffic.
     * @returns any Get top locations by bot class response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByBotClass({
        botClass,
    }: {
        botClass: bot_class,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations/bot_class/{bot_class}',
            path: {
                'bot_class': botClass,
            },
        });
    }

    /**
     * Get top locations by device type
     * Get the top locations, by HTTP traffic, of the requested device type. Values are a percentage out of the total traffic.
     * @returns any Get top locations by device type response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByDeviceType({
        deviceType,
    }: {
        deviceType: device_type,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations/device_type/{device_type}',
            path: {
                'device_type': deviceType,
            },
        });
    }

    /**
     * Get top locations by HTTP protocol
     * Get the top locations, by HTTP traffic, of the requested HTTP protocol. Values are a percentage out of the total traffic.
     * @returns any Get top locations by HTTP protocol response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByHttpProtocol({
        httpProtocol,
    }: {
        httpProtocol: http_protocol,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations/http_protocol/{http_protocol}',
            path: {
                'http_protocol': httpProtocol,
            },
        });
    }

    /**
     * Get top locations by HTTP version
     * Get the top locations, by HTTP traffic, of the requested HTTP protocol. Values are a percentage out of the total traffic.
     * @returns any Get top locations by HTTP version response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByHttpVersion({
        httpVersion,
    }: {
        httpVersion: http_version,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations/http_version/{http_version}',
            path: {
                'http_version': httpVersion,
            },
        });
    }

    /**
     * Get top locations by IP version
     * Get the top locations, by HTTP traffic, of the requested IP protocol version. Values are a percentage out of the total traffic.
     * @returns any Get top locations by IP version response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByIpVersion({
        ipVersion,
    }: {
        ipVersion: ip_version,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations/ip_version/{ip_version}',
            path: {
                'ip_version': ipVersion,
            },
        });
    }

    /**
     * Get top locations by TLS version
     * Get the top locations, by HTTP traffic, of the requested TLS protocol version. Values are a percentage out of the total traffic.
     * @returns any Get top locations by TLS version response
     * @throws ApiError
     */
    public radarHttpGetTopLocationsByTlsVersion({
        tlsVersion,
    }: {
        tlsVersion: tls_version,
    }): CancelablePromise<{
        result?: {
            meta?: {
                confidenceInfo?: {
                    annotations?: Array<{
                        dataSource?: string;
                        description?: string;
                        endTime?: string;
                        eventType?: string;
                        startTime?: string;
                    }>;
                    level?: number;
                };
                dateRange?: {
                    endTime?: string;
                    startTime?: string;
                };
            };
            top_0?: Array<{
                clientCountryAlpha2?: string;
                clientCountryName?: string;
                value?: string;
            }>;
        };
        success?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/radar/http/top/locations/tls_version/{tls_version}',
            path: {
                'tls_version': tlsVersion,
            },
        });
    }

}
