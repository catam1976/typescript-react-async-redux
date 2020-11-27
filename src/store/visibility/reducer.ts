import { Reducer } from 'react';
import { VISIBILITY_FILTERS } from '../../constants';
import { DisplayState, VisibilityAction, VisibilityActionTypes } from './types';

const initialState: DisplayState = {
    visibilityFilter: VISIBILITY_FILTERS.ALL
};

const reducer: Reducer<DisplayState, VisibilityAction> = (state = initialState, action) => {

    switch (action.type) {
        case VisibilityActionTypes.SET_FILTER: {
            return {
                visibilityFilter: action.payload.filter
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as displayReducer };
