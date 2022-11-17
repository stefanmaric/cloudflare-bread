/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { filename } from './filename';
import type { images_components_schemas_identifier } from './images_components_schemas_identifier';
import type { metadata } from './metadata';
import type { schemas_requireSignedURLs } from './schemas_requireSignedURLs';
import type { schemas_uploaded } from './schemas_uploaded';
import type { schemas_variants } from './schemas_variants';

export type images = {
    filename?: filename;
    id?: images_components_schemas_identifier;
    metadata?: metadata;
    requireSignedURLs?: schemas_requireSignedURLs;
    uploaded?: schemas_uploaded;
    variants?: schemas_variants;
};

