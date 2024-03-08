import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
    isModalOpen: false,
    editValues: { editId: null, editText: '' },
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToEdit = state.todos.find(todo => todo.id === id);
            if (todoToEdit) {
                todoToEdit.text = text;
            }
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setEditValues: (state, action) => {
            const { editId, editText } = action.payload;

            state.editValues.editId = editId;
            state.editValues.editText = editText || '';
        },

    }
});

export const { addTodo, removeTodo, editTodo, setIsModalOpen, setEditValues } = todoSlice.actions;

export default todoSlice.reducer;


