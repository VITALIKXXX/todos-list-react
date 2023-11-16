import { takeLatest, call, put, takeEvery, delay, select } from "redux-saga/effects";
import { fetchExapleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExepleTasks } from "./getExepleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExapleTasksHandler() {
    try {
        yield delay(1000);
        const exapleTasks = yield call(getExepleTasks);
        yield put(setTasks(exapleTasks))
    } catch (error) {
        yield call(alert, "Cos poszlo nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export default function* tasksSaga() {
    yield takeLatest(fetchExapleTasks.type, fetchExapleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}