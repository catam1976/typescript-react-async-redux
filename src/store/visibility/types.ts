export enum VisibilityActionTypes {
    SET_FILTER = '@@todos/SET_FILTER'
}

export interface SetFilterAction {
    type: typeof VisibilityActionTypes.SET_FILTER;
    payload: {
        filter: string;
    };
}

export type VisibilityAction = SetFilterAction;

export interface DisplayState {
    visibilityFilter: string;
}
