/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { notes } from './notes';
import type { rule_components_schemas_identifier } from './rule_components_schemas_identifier';
import type { schemas_configuration } from './schemas_configuration';
import type { schemas_mode } from './schemas_mode';

export type rule = {
    /**
     * The available actions that a rule can apply to a matched request.
     */
    readonly allowed_modes: Array<schemas_mode>;
    configuration: schemas_configuration;
    /**
     * The timestamp of when the rule was created.
     */
    readonly created_on?: string;
    id: rule_components_schemas_identifier;
    mode: schemas_mode;
    /**
     * The timestamp of when the rule was last modified.
     */
    readonly modified_on?: string;
    notes?: notes;
};

