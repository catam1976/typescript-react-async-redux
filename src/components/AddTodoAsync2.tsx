import React, { ChangeEvent } from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { addTodoAsyncActionCreator } from '../store/todos/actionCreators';
import { TodoAction } from '../store/todos/types';

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

const mapDispatchToProps: MapDispatchToPropsParam<IDispatchProps, IOwnProps> =
    (dispatch: ThunkDispatch<RootState, {}, TodoAction>, ownProps: IOwnProps) => {

        const dispatchProps: IDispatchProps = {
            addTodo: async (content: string) => {
                await dispatch(addTodoAsyncActionCreator(content));
            }
        };

        return dispatchProps;
    };

// export default AddTodo;
export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
