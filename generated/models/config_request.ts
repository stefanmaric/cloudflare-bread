/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { crowdstrike_config_request } from './crowdstrike_config_request';
import type { intune_config_request } from './intune_config_request';
import type { uptycs_config_request } from './uptycs_config_request';
import type { workspace_one_config_request } from './workspace_one_config_request';

/**
 * The configuration object containing third party integration information.
 */
export type config_request = (workspace_one_config_request | crowdstrike_config_request | uptycs_config_request | intune_config_request);

