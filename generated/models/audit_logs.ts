/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';

export type audit_logs = {
    action?: {
        /**
         * A boolean that indicates if the action attempted was successful.
         */
        result?: boolean;
        /**
         * A short string that describes the action that was performed.
         */
        type?: string;
    };
    actor?: {
        /**
         * The email of the user that performed the action.
         */
        email?: string;
        /**
         * The ID of the actor that performed the action. If a user performed the action, this will be their User ID.
         */
        id?: string;
        /**
         * The IP address of the request that performed the action.
         */
        ip?: string;
        /**
         * The type of actor, whether a User, Cloudflare Admin, or an Automated System.
         */
        type?: 'user' | 'admin' | 'Cloudflare';
    };
    /**
     * A string that uniquely identifies the audit log.
     */
    id?: string;
    /**
     * The source of the event.
     */
    interface?: string;
    /**
     * An object which can lend more context to the action being logged. This is a flexible value and varies between different actions.
     */
    metadata?: Record<string, any>;
    /**
     * The new value of the resource that was modified.
     */
    newValue?: string;
    /**
     * The value of the resource before it was modified.
     */
    oldValue?: string;
    owner?: {
        id?: common_components_schemas_identifier;
    };
    resource?: {
        /**
         * An identifier for the resource that was affected by the action.
         */
        id?: string;
        /**
         * A short string that describes the resource that was affected by the action.
         */
        type?: string;
    };
    /**
     * A UTC RFC3339 timestamp that specifies when the action being logged occured.
     */
    when?: string;
};

