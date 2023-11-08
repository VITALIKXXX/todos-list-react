import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTasks: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setAllDone: state => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTasks, setAllDone } = tasksSlice.actions;
export const selectAllTasksDone = state => state.tasks.tasks.every(task => task.done)
export const selectShowMessage = state => {
    const { tasks, hideDone } = state.tasks;
    return (
        tasks.lenght === 0 || (hideDone && tasks.every(task => task.done)));
};
export const selectTasksState = state => state.tasks;
export default tasksSlice.reducer;