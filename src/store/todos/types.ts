export interface TodoItem {
    id: number;
    completed: boolean;
    content: string;
}

export enum TodoActionTypes {
    ADD_TODO = '@@todos/ADD_TODO',
    TOGGLE_TODO = '@@todos/TOGGLE_TODO'
}

export interface AddTodoAction {
    type: typeof TodoActionTypes.ADD_TODO;
    payload: {
        id: number;
        content: string
    };
}

export interface ToggleTodoAction {
    type: typeof TodoActionTypes.TOGGLE_TODO;
    payload: {
        id: number;
    };
}

export type TodoAction = AddTodoAction | ToggleTodoAction;

export interface TodoState {
    allIds: number[];
    byIds: {
        [id: number]: TodoItem
    };
}
