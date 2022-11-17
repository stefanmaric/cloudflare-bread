/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { fit } from './fit';
import type { schemas_height } from './schemas_height';
import type { schemas_metadata } from './schemas_metadata';
import type { schemas_width } from './schemas_width';

/**
 * Allows you to define image resizing sizes for different use cases.
 */
export type options = {
    fit: fit;
    height: schemas_height;
    metadata: schemas_metadata;
    width: schemas_width;
};

