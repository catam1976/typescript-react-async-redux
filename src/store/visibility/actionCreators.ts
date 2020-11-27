import { VisibilityAction, VisibilityActionTypes } from './types';

export function setFilterActionCreator(filter: string): VisibilityAction {
    return {
        type: VisibilityActionTypes.SET_FILTER,
        payload: {filter}
    };
}
