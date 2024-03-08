import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setEditValues, setIsModalOpen } from '../features/todo/todoSlice';
import Modal from './Modal';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const isModalOpen = useSelector(state => state.isModalOpen);

    const editTodoHandler = (todo) => {
        dispatch(setIsModalOpen(!isModalOpen));
        dispatch(setEditValues({ editId: todo.id, editText: todo.text }));
    };



    return (
        <>
            <h2 className='text-white text-5xl font-bold my-4'>Todos</h2>
            <ul className="list-none">
                {todos.length > 0 ? todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div className="flex gap-2">
                            <button
                                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                                onClick={() => editTodoHandler(todo)}>
                                Edit
                            </button>

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                )) : <h1 className='text-white/80 text-3xl font-semibold'>List is empty...</h1>}
            </ul>

            {isModalOpen && <Modal />}
        </>
    );
};

export default Todos;
