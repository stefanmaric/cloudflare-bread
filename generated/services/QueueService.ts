/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { consumer } from '../models/consumer';
import type { consumer_created } from '../models/consumer_created';
import type { consumer_name } from '../models/consumer_name';
import type { consumer_updated } from '../models/consumer_updated';
import type { queue } from '../models/queue';
import type { queue_created } from '../models/queue_created';
import type { queue_updated } from '../models/queue_updated';
import type { queues_components_schemas_name } from '../models/queues_components_schemas_name';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class QueueService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Queues
     * Returns the queues owned by an account.
     * @returns any List Queues response
     * @throws ApiError
     */
    public queueListQueues({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & {
        result?: Array<queue>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/queues',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Queue
     * Creates a new queue.
     * @returns any Create Queue response
     * @throws ApiError
     */
    public queueCreateQueue({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(api_response_collection & {
        result?: queue_created;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/workers/queues',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Queue
     * Deletes a queue.
     * @returns any Delete Queue response
     * @throws ApiError
     */
    public queueDeleteQueue({
        name,
        accountIdentifier,
        requestBody,
    }: {
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/workers/queues/{name}',
            path: {
                'name': name,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Queue Details
     * Get information about a specific queue.
     * @returns any Queue Details response
     * @throws ApiError
     */
    public queueQueueDetails({
        name,
        accountIdentifier,
    }: {
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & {
        result?: queue;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/queues/{name}',
            path: {
                'name': name,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Queue
     * Updates a queue.
     * @returns any Update Queue response
     * @throws ApiError
     */
    public queueUpdateQueue({
        name,
        accountIdentifier,
        requestBody,
    }: {
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(api_response_collection & {
        result?: queue_updated;
    })> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/queues/{name}',
            path: {
                'name': name,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Queue Consumers
     * Returns the consumers for a queue.
     * @returns any List Queue Consumers response
     * @throws ApiError
     */
    public queueListQueueConsumers({
        name,
        accountIdentifier,
    }: {
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & {
        result?: Array<consumer>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/queues/{name}/consumers',
            path: {
                'name': name,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Queue Consumer
     * Creates a new consumer for a queue.
     * @returns any Create Queue Consumer response
     * @throws ApiError
     */
    public queueCreateQueueConsumer({
        name,
        accountIdentifier,
        requestBody,
    }: {
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(api_response_collection & {
        result?: consumer_created;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/workers/queues/{name}/consumers',
            path: {
                'name': name,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Queue Consumer
     * Deletes the consumer for a queue.
     * @returns any Delete Queue Consumer response
     * @throws ApiError
     */
    public queueDeleteQueueConsumer({
        consumerName,
        name,
        accountIdentifier,
        requestBody,
    }: {
        consumerName: consumer_name,
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/workers/queues/{name}/consumers/{consumer_name}',
            path: {
                'consumer_name': consumerName,
                'name': name,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update Queue Consumer
     * Updates the consumer for a queue, or creates one if it does not exist.
     * @returns any Update Queue Consumer response
     * @throws ApiError
     */
    public queueUpdateQueueConsumer({
        consumerName,
        name,
        accountIdentifier,
        requestBody,
    }: {
        consumerName: consumer_name,
        name: queues_components_schemas_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(api_response_collection & {
        result?: consumer_updated;
    })> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/queues/{name}/consumers/{consumer_name}',
            path: {
                'consumer_name': consumerName,
                'name': name,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
