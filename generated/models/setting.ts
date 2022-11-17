/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { advanced_ddos } from './advanced_ddos';
import type { always_online } from './always_online';
import type { always_use_https } from './always_use_https';
import type { automatic_https_rewrites } from './automatic_https_rewrites';
import type { brotli } from './brotli';
import type { browser_cache_ttl } from './browser_cache_ttl';
import type { browser_check } from './browser_check';
import type { cache_level } from './cache_level';
import type { challenge_ttl } from './challenge_ttl';
import type { ciphers } from './ciphers';
import type { cname_flattening } from './cname_flattening';
import type { development_mode } from './development_mode';
import type { early_hints } from './early_hints';
import type { edge_cache_ttl } from './edge_cache_ttl';
import type { email_obfuscation } from './email_obfuscation';
import type { h2_prioritization } from './h2_prioritization';
import type { hotlink_protection } from './hotlink_protection';
import type { http2 } from './http2';
import type { http3 } from './http3';
import type { image_resizing } from './image_resizing';
import type { ip_geolocation } from './ip_geolocation';
import type { ipv6 } from './ipv6';
import type { max_upload } from './max_upload';
import type { min_tls_version } from './min_tls_version';
import type { minify } from './minify';
import type { mirage } from './mirage';
import type { mobile_redirect } from './mobile_redirect';
import type { nel } from './nel';
import type { opportunistic_encryption } from './opportunistic_encryption';
import type { opportunistic_onion } from './opportunistic_onion';
import type { orange_to_orange } from './orange_to_orange';
import type { origin_error_page_pass_thru } from './origin_error_page_pass_thru';
import type { origin_max_http_version } from './origin_max_http_version';
import type { polish } from './polish';
import type { prefetch_preload } from './prefetch_preload';
import type { privacy_pass } from './privacy_pass';
import type { proxy_read_timeout } from './proxy_read_timeout';
import type { pseudo_ipv4 } from './pseudo_ipv4';
import type { response_buffering } from './response_buffering';
import type { rocket_loader } from './rocket_loader';
import type { rtt } from './rtt';
import type { schemas_automatic_platform_optimization } from './schemas_automatic_platform_optimization';
import type { security_header } from './security_header';
import type { security_level } from './security_level';
import type { server_side_exclude } from './server_side_exclude';
import type { sha1_support } from './sha1_support';
import type { sort_query_string_for_cache } from './sort_query_string_for_cache';
import type { ssl } from './ssl';
import type { ssl_recommender } from './ssl_recommender';
import type { tls_1_2_only } from './tls_1_2_only';
import type { tls_1_3 } from './tls_1_3';
import type { tls_client_auth } from './tls_client_auth';
import type { true_client_ip_header } from './true_client_ip_header';
import type { waf } from './waf';
import type { webp } from './webp';
import type { websockets } from './websockets';

export type setting = (always_online | advanced_ddos | brotli | browser_cache_ttl | browser_check | cname_flattening | cache_level | challenge_ttl | development_mode | early_hints | edge_cache_ttl | origin_error_page_pass_thru | sort_query_string_for_cache | email_obfuscation | hotlink_protection | ip_geolocation | ipv6 | websockets | sha1_support | tls_1_2_only | minify | max_upload | mobile_redirect | mirage | nel | polish | webp | prefetch_preload | privacy_pass | response_buffering | rocket_loader | security_header | security_level | server_side_exclude | ssl | ssl_recommender | tls_client_auth | true_client_ip_header | proxy_read_timeout | waf | min_tls_version | ciphers | tls_1_3 | opportunistic_encryption | automatic_https_rewrites | http2 | http3 | origin_max_http_version | rtt | pseudo_ipv4 | always_use_https | opportunistic_onion | orange_to_orange | image_resizing | h2_prioritization | schemas_automatic_platform_optimization);

