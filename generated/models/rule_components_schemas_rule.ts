/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { access_group_rule } from './access_group_rule';
import type { azure_group_rule } from './azure_group_rule';
import type { certificate_rule } from './certificate_rule';
import type { domain_rule } from './domain_rule';
import type { email_rule } from './email_rule';
import type { everyone_rule } from './everyone_rule';
import type { github_organization_rule } from './github_organization_rule';
import type { gsuite_group_rule } from './gsuite_group_rule';
import type { ip_list_rule } from './ip_list_rule';
import type { ip_rule } from './ip_rule';
import type { okta_group_rule } from './okta_group_rule';
import type { saml_group_rule } from './saml_group_rule';

export type rule_components_schemas_rule = (email_rule | domain_rule | everyone_rule | ip_rule | ip_list_rule | certificate_rule | access_group_rule | azure_group_rule | github_organization_rule | gsuite_group_rule | okta_group_rule | saml_group_rule);

