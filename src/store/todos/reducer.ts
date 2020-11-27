import { Reducer } from 'react';
import { TodoAction, TodoActionTypes, TodoState } from './types';

const initialState: TodoState = {
    allIds: [],
    byIds: {}
};

const reducer: Reducer<TodoState, TodoAction> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO: {
            const {id, content} = action.payload;

            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        id,
                        content,
                        completed: false
                    }
                }
            };
        }

        case TodoActionTypes.TOGGLE_TODO: {
            const {id} = action.payload;

            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }

        default:
            return state;
    }
};

export { reducer as todosReducer };
