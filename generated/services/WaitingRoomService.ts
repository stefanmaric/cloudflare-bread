/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_rule } from '../models/create_rule';
import type { event_details_response } from '../models/event_details_response';
import type { event_id } from '../models/event_id';
import type { event_id_response } from '../models/event_id_response';
import type { event_response } from '../models/event_response';
import type { event_response_collection } from '../models/event_response_collection';
import type { patch_rule } from '../models/patch_rule';
import type { query_event } from '../models/query_event';
import type { query_preview } from '../models/query_preview';
import type { query_waitingroom } from '../models/query_waitingroom';
import type { rule_id } from '../models/rule_id';
import type { schemas_preview_response } from '../models/schemas_preview_response';
import type { schemas_rules_response_collection } from '../models/schemas_rules_response_collection';
import type { status_response } from '../models/status_response';
import type { update_rules } from '../models/update_rules';
import type { waiting_room_id } from '../models/waiting_room_id';
import type { waiting_room_id_response } from '../models/waiting_room_id_response';
import type { waitingroom_components_schemas_response_collection } from '../models/waitingroom_components_schemas_response_collection';
import type { waitingroom_components_schemas_single_response } from '../models/waitingroom_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WaitingRoomService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List waiting rooms
     * Lists waiting rooms.
     * @returns waitingroom_components_schemas_response_collection List waiting rooms response
     * @throws ApiError
     */
    public waitingRoomListWaitingRooms({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<waitingroom_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create waiting room
     * Creates a new waiting room.
     * @returns waitingroom_components_schemas_single_response Create waiting room response
     * @throws ApiError
     */
    public waitingRoomCreateWaitingRoom({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_waitingroom,
    }): CancelablePromise<waitingroom_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/waiting_rooms',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a custom waiting room page preview
     * Creates a waiting room page preview. Upload a custom waiting room page for preview. You will receive a preview URL in the form `http://waitingrooms.dev/preview/<uuid>`. You can use the following query parameters to change the state of the preview:
     * 1. `force_queue`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website (also known as queueAll).
     * 2. `queue_is_full`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
     * 3. `queueing_method`: The queueing method currently used by the waiting room.
     * - **fifo** indicates a FIFO queue.
     * - **random** indicates a Random queue.
     * - **passthrough** indicates a Passthrough queue. Keep in mind that the waiting room page will only be displayed if `force_queue=true` or `event=prequeueing` — for other cases the request will pass through to the origin. For our preview, this will be a fake origin website returning "Welcome".
     * - **reject** indicates a Reject queue.
     * 4. `event`: Used to preview a waiting room event.
     * - **none** indicates no event is occurring.
     * - **prequeueing** indicates that an event is prequeueing (between `prequeue_start_time` and `event_start_time`).
     * - **started** indicates that an event has started (between `event_start_time` and `event_end_time`).
     * 5. `shuffle_at_event_start`: Boolean indicating if the event will shuffle users in the prequeue when it starts. This can only be set to **true** if an event is active (`event` is not **none**).
     *
     * For example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?force_queue=false&queue_is_full=false&queueing_method=random&event=started&shuffle_at_event_start=true`
     * 6. `waitTime`: Non-zero, positive integer indicating the estimated wait time in minutes. The default value is 10 minutes.
     *
     * For example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?waitTime=50` to configure the estimated wait time as 50 minutes.
     * @returns schemas_preview_response Create a custom waiting room page preview response
     * @throws ApiError
     */
    public waitingRoomCreateACustomWaitingRoomPagePreview({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_preview,
    }): CancelablePromise<schemas_preview_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/waiting_rooms/preview',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete waiting room
     * Deletes a waiting room.
     * @returns waiting_room_id_response Delete waiting room response
     * @throws ApiError
     */
    public waitingRoomDeleteWaitingRoom({
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<waiting_room_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Waiting room details
     * Fetches a single configured waiting room.
     * @returns waitingroom_components_schemas_single_response Waiting room details response
     * @throws ApiError
     */
    public waitingRoomWaitingRoomDetails({
        waitingRoomId,
        zoneIdentifier,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<waitingroom_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Patch waiting room
     * Patches a configured waiting room.
     * @returns waitingroom_components_schemas_single_response Patch waiting room response
     * @throws ApiError
     */
    public waitingRoomPatchWaitingRoom({
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_waitingroom,
    }): CancelablePromise<waitingroom_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update waiting room
     * Updates a configured waiting room.
     * @returns waitingroom_components_schemas_single_response Update waiting room response
     * @throws ApiError
     */
    public waitingRoomUpdateWaitingRoom({
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_waitingroom,
    }): CancelablePromise<waitingroom_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List events
     * Lists events for a waiting room.
     * @returns event_response_collection List events response
     * @throws ApiError
     */
    public waitingRoomListEvents({
        waitingRoomId,
        zoneIdentifier,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<event_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create event
     * Only available for the Waiting Room Advanced subscription. Creates an event for a waiting room. An event takes place during a specified period of time, temporarily changing the behavior of a waiting room. While the event is active, some of the properties in the event's configuration may either override or inherit from the waiting room's configuration. Note that events cannot overlap with each other, so only one event can be active at a time.
     * @returns event_response Create event response
     * @throws ApiError
     */
    public waitingRoomCreateEvent({
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_event,
    }): CancelablePromise<event_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete event
     * Deletes an event for a waiting room.
     * @returns event_id_response Delete event response
     * @throws ApiError
     */
    public waitingRoomDeleteEvent({
        eventId,
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        eventId: event_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<event_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}',
            path: {
                'event_id': eventId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Event details
     * Fetches a single configured event for a waiting room.
     * @returns event_response Event details response
     * @throws ApiError
     */
    public waitingRoomEventDetails({
        eventId,
        waitingRoomId,
        zoneIdentifier,
    }: {
        eventId: event_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<event_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}',
            path: {
                'event_id': eventId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Patch event
     * Patches a configured event for a waiting room.
     * @returns event_response Patch event response
     * @throws ApiError
     */
    public waitingRoomPatchEvent({
        eventId,
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        eventId: event_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_event,
    }): CancelablePromise<event_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}',
            path: {
                'event_id': eventId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update event
     * Updates a configured event for a waiting room.
     * @returns event_response Update event response
     * @throws ApiError
     */
    public waitingRoomUpdateEvent({
        eventId,
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        eventId: event_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_event,
    }): CancelablePromise<event_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}',
            path: {
                'event_id': eventId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Preview active event details
     * Previews an event's configuration as if it was active. Inherited fields from the waiting room will be displayed with their current values.
     * @returns event_details_response Preview active event details response
     * @throws ApiError
     */
    public waitingRoomPreviewActiveEventDetails({
        eventId,
        waitingRoomId,
        zoneIdentifier,
    }: {
        eventId: event_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<event_details_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}/details',
            path: {
                'event_id': eventId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * List Waiting Room Rules
     * Lists rules for a waiting room.
     * @returns schemas_rules_response_collection List Waiting Room Rules response
     * @throws ApiError
     */
    public waitingRoomListWaitingRoomRules({
        waitingRoomId,
        zoneIdentifier,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_rules_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create Waiting Room Rule
     * Only available for the Waiting Room Advanced subscription. Creates a rule for a waiting room.
     * @returns schemas_rules_response_collection Create Waiting Room Rule response
     * @throws ApiError
     */
    public waitingRoomCreateWaitingRoomRule({
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: create_rule,
    }): CancelablePromise<schemas_rules_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Replace Waiting Room Rules
     * Only available for the Waiting Room Advanced subscription. Replaces all rules for a waiting room.
     * @returns schemas_rules_response_collection Replace Waiting Room Rules response
     * @throws ApiError
     */
    public waitingRoomReplaceWaitingRoomRules({
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: update_rules,
    }): CancelablePromise<schemas_rules_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Waiting Room Rule
     * Deletes a rule for a waiting room.
     * @returns schemas_rules_response_collection Delete Waiting Room Rule response
     * @throws ApiError
     */
    public waitingRoomDeleteWaitingRoomRule({
        ruleId,
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        ruleId: rule_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_rules_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Patch Waiting Room Rule
     * Patches a rule for a waiting room.
     * @returns schemas_rules_response_collection Patch Waiting Room Rule response
     * @throws ApiError
     */
    public waitingRoomPatchWaitingRoomRule({
        ruleId,
        waitingRoomId,
        zoneIdentifier,
        requestBody,
    }: {
        ruleId: rule_id,
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: patch_rule,
    }): CancelablePromise<schemas_rules_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get waiting room status
     * Fetches the status of a configured waiting room. Response fields include:
     * 1. `status`: String indicating the status of the waiting room. The possible status are:
     * - **not_queueing** indicates that the configured thresholds have not been met and all users are going through to the origin.
     * - **queueing** indicates that the thresholds have been met and some users are held in the waiting room.
     * - **event_prequeueing** indicates that an event is active and is currently prequeueing users before it starts.
     * 2. `event_id`: String of the current event's `id` if an event is active, otherwise an empty string.
     * 3. `estimated_queued_users`: Integer of the estimated number of users currently waiting in the queue.
     * 4. `estimated_total_active_users`: Integer of the estimated number of users currently active on the origin.
     * 5. `max_estimated_time_minutes`: Integer of the maximum estimated time currently presented to the users.
     * @returns status_response Get waiting room status response
     * @throws ApiError
     */
    public waitingRoomGetWaitingRoomStatus({
        waitingRoomId,
        zoneIdentifier,
    }: {
        waitingRoomId: waiting_room_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<status_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/status',
            path: {
                'waiting_room_id': waitingRoomId,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
