import { combineReducers } from 'redux';
import { todosReducer } from './todos/reducer';
import { TodoAction } from './todos/types';
import { displayReducer } from './visibility/reducer';
import { SetFilterAction } from './visibility/types';

export const rootReducer = combineReducers({
    todos: todosReducer,
    display: displayReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppAction = TodoAction | SetFilterAction;
