/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { app_launcher_props } from './app_launcher_props';
import type { basic_app_response_props } from './basic_app_response_props';
import type { biso_props } from './biso_props';
import type { bookmark_props } from './bookmark_props';
import type { saas_props } from './saas_props';
import type { self_hosted_props } from './self_hosted_props';
import type { ssh_props } from './ssh_props';
import type { vnc_props } from './vnc_props';
import type { warp_props } from './warp_props';

export type apps = ((basic_app_response_props & self_hosted_props) | (basic_app_response_props & saas_props) | (basic_app_response_props & ssh_props) | (basic_app_response_props & vnc_props) | (basic_app_response_props & app_launcher_props) | (basic_app_response_props & warp_props) | (basic_app_response_props & biso_props) | (basic_app_response_props & bookmark_props));

