import cx from 'classnames';
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { toggleTodoActionCreator } from '../store/todos/actionCreators';
import { TodoAction, TodoItem } from '../store/todos/types';

export interface TodoProps {
    key: string;
    todo: TodoItem;
}

interface IDispatchProps {
    dispatch: Dispatch<TodoAction>;
}

/**
 * Version of Todo that uses Redux Dispatcher.
 */
const Todo2: React.FunctionComponent<TodoProps & IDispatchProps> = (props) => {
    const todoIsCompleted: boolean = !(props == null) && !(props.todo == null) && props.todo.completed;

    return (
        <li
            className='todo-item'
            onClick={() => {
                props.dispatch(toggleTodoActionCreator(props.todo.id));
            }}
        >
            {todoIsCompleted ? '👌' : '👋'}{' '}
            <span className={cx('todo-item__text', todoIsCompleted ? 'todo-item__text--completed' : '')}>
                {props.todo.content}
            </span>
        </li>
    );
};

// export default Todo2;
export default connect()(Todo2);
