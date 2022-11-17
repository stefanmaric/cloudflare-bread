/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * For specifying result metrics.
 */
export type query = {
    /**
     * Can be used to break down the data by given attributes.
     */
    dimensions?: Array<string>;
    /**
     * Used to filter rows by one or more dimensions. Filters can be combined using OR and AND boolean logic. AND takes precedence over OR in all the expressions. The OR operator is defined using a comma (,) or OR keyword surrounded by whitespace. The AND operator is defined using a semicolon (;) or AND keyword surrounded by whitespace. Note that the semicolon is a reserved character in URLs (rfc1738) and needs to be percent-encoded as %3B. Comparison options are:
     *
     * Operator                  | Name                            | URL Encoded
     * --------------------------|---------------------------------|--------------------------
     * ==                        | Equals                          | %3D%3D
     * !=                        | Does not equals                 | !%3D
     * >                        | Greater Than                    | %3E
     * <                         | Less Than                       | %3C
     * >=                       | Greater than or equal to        | %3E%3D
     * <=                        | Less than or equal to           | %3C%3D     .
     */
    filters?: string;
    /**
     * Limit number of returned metrics.
     */
    limit?: number;
    /**
     * One or more metrics to compute.
     */
    metrics?: Array<string>;
    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;
    /**
     * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed by - (descending) or + (ascending).
     */
    sort?: Array<any>;
    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
};

