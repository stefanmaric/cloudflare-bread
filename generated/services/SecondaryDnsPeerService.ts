/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { peer } from '../models/peer';
import type { peer_components_schemas_id_response } from '../models/peer_components_schemas_id_response';
import type { peer_components_schemas_identifier } from '../models/peer_components_schemas_identifier';
import type { peer_components_schemas_response_collection } from '../models/peer_components_schemas_response_collection';
import type { peer_components_schemas_single_response } from '../models/peer_components_schemas_single_response';
import type { schemas_account_identifier } from '../models/schemas_account_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecondaryDnsPeerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Peers
     * List Peers.
     * @returns peer_components_schemas_response_collection List Peers response
     * @throws ApiError
     */
    public secondaryDnsPeerListPeers({
        accountIdentifier,
    }: {
        accountIdentifier: schemas_account_identifier,
    }): CancelablePromise<peer_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/secondary_dns/peers',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Peer
     * Create Peer.
     * @returns peer_components_schemas_single_response Create Peer response
     * @throws ApiError
     */
    public secondaryDnsPeerCreatePeer({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<peer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/secondary_dns/peers',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Peer
     * Delete Peer.
     * @returns peer_components_schemas_id_response Delete Peer response
     * @throws ApiError
     */
    public secondaryDnsPeerDeletePeer({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: peer_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<peer_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/secondary_dns/peers/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Peer Details
     * Get Peer.
     * @returns peer_components_schemas_single_response Peer Details response
     * @throws ApiError
     */
    public secondaryDnsPeerPeerDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: peer_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
    }): CancelablePromise<peer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/secondary_dns/peers/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Peer
     * Modify Peer.
     * @returns peer_components_schemas_single_response Update Peer response
     * @throws ApiError
     */
    public secondaryDnsPeerUpdatePeer({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: peer_components_schemas_identifier,
        accountIdentifier: schemas_account_identifier,
        requestBody: peer,
    }): CancelablePromise<peer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/secondary_dns/peers/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
