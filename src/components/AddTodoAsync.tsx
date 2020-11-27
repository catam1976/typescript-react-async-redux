import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { addTodoAsyncActionCreator } from '../store/todos/actionCreators';

// tslint:disable-next-line:no-empty-interface
interface IOwnProps {
}

// tslint:disable-next-line:no-empty-interface
interface IStateProps {
}

interface IDispatchProps {
    addTodo: (string) => void;
}

export type AddTodoProps = IStateProps & IOwnProps & IDispatchProps;

interface AddTodoState {
    input: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
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
        this.props.addTodo(this.state.input);
        this.setState({input: ''});
    }
}

// export default AddTodo;
export default connect(
    null,
    {
        addTodo: addTodoAsyncActionCreator
    }
)(AddTodo);
