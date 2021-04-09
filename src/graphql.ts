
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Admin {
    userId?: string;
    columnId?: string;
    IsEnable?: boolean;
}

export interface Idea {
    id?: string;
    userId?: string;
    columnId?: string;
    IsEnable?: boolean;
}

export interface IQuery {
    admin(userId?: string): string | Promise<string>;
}

export interface IMutation {
    updateItem(userId: string, input?: Admin): Idea | Promise<Idea>;
    createItem(userId: string, input?: Admin): Idea | Promise<Idea>;
    deleteIdea(id: string): Idea | Promise<Idea>;
}
