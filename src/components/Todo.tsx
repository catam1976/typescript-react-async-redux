import cx from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoActionCreator } from '../store/todos/actionCreators';
import { TodoItem } from '../store/todos/types';

interface IOwnProps {
    key: string;
    todo: TodoItem;
}

interface IDispatchProps {
    toggleTodo: (number) => void;
}

// tslint:disable-next-line:no-empty-interface
interface IStateProps {
}

export type TodoProps = IStateProps & IOwnProps & IDispatchProps;

const Todo: React.FunctionComponent<TodoProps> = (props) => {
    const todoIsCompleted: boolean = !(props == null) && !(props.todo == null) && props.todo.completed;

    return (
        <li className='todo-item' onClick={() => props.toggleTodo(props.todo.id)}>
            {todoIsCompleted ? '👌' : '👋'}{' '}
            <span className={cx('todo-item__text', todoIsCompleted ? 'todo-item__text--completed' : '')}>
                {props.todo.content}
            </span>
        </li>
    );
};

// export default Todo;
export default connect(
    null,
    {
        toggleTodo: toggleTodoActionCreator
    }
)(Todo);
