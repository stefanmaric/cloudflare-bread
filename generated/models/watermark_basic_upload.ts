/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { opacity } from './opacity';
import type { padding } from './padding';
import type { position } from './position';
import type { scale } from './scale';
import type { watermarks_components_schemas_name } from './watermarks_components_schemas_name';

export type watermark_basic_upload = {
    /**
     * The image file to upload.
     */
    file: string;
    name?: watermarks_components_schemas_name;
    opacity?: opacity;
    padding?: padding;
    position?: position;
    scale?: scale;
};

