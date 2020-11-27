import { VISIBILITY_FILTERS } from '../constants';
import { RootState } from './index';
import { TodoItem, TodoState } from './todos/types';

export function getTodosState(store: RootState): TodoState {
    return store.todos;
}

export function getTodoList(store: RootState): number[] {
    const todoState: TodoState = getTodosState(store);

    return (null == todoState) ? [] : todoState.allIds;
}

export function getTodoById(store: RootState, id: number): TodoItem | null {
    const todosState: TodoState = getTodosState(store);

    if (todosState == null) {
        return null;
    }

    return todosState.byIds[id];
}

export function getTodos(store: RootState): TodoItem[] {
    const toIds: number[] = getTodoList(store);

    return toIds
        .filter((id) => (null != getTodoById(store, id)))
        .map((id) => getTodoById(store, id) as TodoItem);
}

export function getTodosByVisibilityFilter(store: RootState, visibilityFilter: string): TodoItem[] {
    const allTodos = getTodos(store);

    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter((todo) => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter((todo) => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}
