/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address2 } from './address2';
import type { city } from './city';
import type { components_schemas_address } from './components_schemas_address';
import type { contact_identifier } from './contact_identifier';
import type { contacts_components_schemas_state } from './contacts_components_schemas_state';
import type { country } from './country';
import type { email } from './email';
import type { fax } from './fax';
import type { first_name } from './first_name';
import type { last_name } from './last_name';
import type { schemas_organization } from './schemas_organization';
import type { telephone } from './telephone';
import type { zipcode } from './zipcode';

export type contact_properties = {
    address: components_schemas_address;
    address2?: address2;
    city: city;
    country: country;
    email?: email;
    fax?: fax;
    first_name: first_name;
    id?: contact_identifier;
    last_name: last_name;
    organization: schemas_organization;
    phone: telephone;
    state: contacts_components_schemas_state;
    zip: zipcode;
};

