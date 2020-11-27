import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../index';
import { TodoAction, TodoActionTypes } from './types';

let nextTodoId: number = 0;

export function addTodoActionCreator(content: string): TodoAction {
    return {
        type: TodoActionTypes.ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content
        }
    };
}

export function toggleTodoActionCreator(id: number): TodoAction {
    return {
        type: TodoActionTypes.TOGGLE_TODO,
        payload: {id}
    };
}

export function addTodoAsyncActionCreator(content: string):
    ThunkAction<Promise<TodoAction>, RootState, {}, TodoAction> {

    return async (
        dispatch: ThunkDispatch<RootState, {}, TodoAction>, getState: () => RootState
    ): Promise<TodoAction> => {

        return fetch(`https://www.hotnews.ro`)
            .then(
                (response: Response) => response.statusText
            )

            .then(
                (statusText) => dispatch(addTodoActionCreator(statusText))
            )

            .catch((error) => {
                    console.log('An error occurred.', error);

                    return dispatch(addTodoActionCreator('ERROR'));
                }
            );
    };
}
