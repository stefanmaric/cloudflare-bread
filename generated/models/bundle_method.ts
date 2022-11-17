/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
 */
export type bundle_method = 'ubiquitous' | 'optimal' | 'force';
