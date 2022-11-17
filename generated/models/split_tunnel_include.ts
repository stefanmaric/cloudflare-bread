/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type split_tunnel_include = {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host must not be present.
     */
    address: string;
    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;
    /**
     * The domain name to include in the tunnel. If host is present, address must not be present.
     */
    host?: string;
};

