/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_created } from './components_schemas_created';
import type { downloadedFrom } from './downloadedFrom';
import type { height } from './height';
import type { opacity } from './opacity';
import type { padding } from './padding';
import type { position } from './position';
import type { scale } from './scale';
import type { schemas_size } from './schemas_size';
import type { watermarks_components_schemas_identifier } from './watermarks_components_schemas_identifier';
import type { watermarks_components_schemas_name } from './watermarks_components_schemas_name';
import type { width } from './width';

export type watermarks = {
    created?: components_schemas_created;
    downloadedFrom?: downloadedFrom;
    height?: height;
    name?: watermarks_components_schemas_name;
    opacity?: opacity;
    padding?: padding;
    position?: position;
    scale?: scale;
    size?: schemas_size;
    uid?: watermarks_components_schemas_identifier;
    width?: width;
};

