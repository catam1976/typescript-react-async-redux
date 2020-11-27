import React, { ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import { addTodoActionCreator } from '../store/todos/actionCreators';
import { TodoAction } from '../store/todos/types';

export interface AddTodoState {
    input: string;
}

interface IDispatchProps {
    dispatch: Dispatch<TodoAction>;
}

/**
 * Version of {@link AddTodo} that uses Redux Dispatcher.
 */
class AddTodo2<AddTodoProps extends IDispatchProps> extends React.Component<AddTodoProps, AddTodoState> {
    constructor(props: AddTodoProps) {
        super(props);

        this.state = {input: ''};
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    public render() {
        return (
            <div>
                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className='add-todo' onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }

    private updateInput(input: string) {
        this.setState({input});
    }

    private handleAddTodo() {
        this.props.dispatch(addTodoActionCreator(this.state.input));
        this.setState({input: ''});
    }
}

// export default AddTodo2;
export default connect()(AddTodo2);
