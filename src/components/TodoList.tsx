import React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { RootState } from '../store';
import { getTodosByVisibilityFilter } from '../store/selectors';
import { TodoItem } from '../store/todos/types';
import { DisplayState } from '../store/visibility/types';
import Todo from './Todo';

// tslint:disable-next-line:no-empty-interface
interface IOwnProps {
}

interface IStateProps {
    todos?: TodoItem[];
}

// tslint:disable-next-line:no-empty-interface
interface IDispatchProps {
}

export type TodoListProps = IStateProps & IOwnProps & IDispatchProps;

const TodoList: React.FunctionComponent<TodoListProps> = (props) => {
    return (
        <ul className='todo-list'>
            {props != null && props.todos != null
                ? props.todos.map((todo, index) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo}/>;
                })
                : 'No todos, yay!'
            }
        </ul>
    );
};

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, RootState> =
    (state: RootState, ownProps: IOwnProps) => {
        const displayState: DisplayState = state.display;
        const visibilityFilter: string = displayState.visibilityFilter;

        return {
            todos: getTodosByVisibilityFilter(state, visibilityFilter)
        };
    };

// export default TodoList;
export default connect(
    mapStateToProps,
    null
)(TodoList);
