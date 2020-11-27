import AddTodoAsync from './components/AddTodoAsync';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import './styles.css';

export default function TodoApp() {
    return (
        <div className='todo-app'>
            <h1>Todo List</h1>
            <AddTodoAsync/>
            <TodoList/>
            <VisibilityFilters/>
        </div>
    );
}
