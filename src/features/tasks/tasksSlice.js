import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
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
        fetchExampleTasksRequest: state => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTasks,
    setAllDone,
    fetchExampleTasksRequest,
    setTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectAllTasksDone = state => selectTasksState(state).hideDone;
export const selectLoading = state => selectTasksState(state).loading;
export const selectTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectShowMessage = state => {
    const { tasks, hideDone } = state.tasks;
    return (
        tasks.length === 0 || (hideDone && tasks.every(task => task.done)));
};

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId)

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;