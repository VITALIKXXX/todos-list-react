import { takeLatest, call, put, takeEvery, delay, select } from "redux-saga/effects";
import { fetchExampleTasksRequest, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks } from "./tasksSlice";
import { getExepleTasks } from "./getExepleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExapleTasksHandler() {
    try {
        yield delay(1000);
        const exapleTasks = yield call(getExepleTasks);
        yield put(fetchExampleTasksSuccess(exapleTasks))
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Cos poszlo nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export default function* tasksSaga() {
    yield takeLatest(fetchExampleTasksRequest.type, fetchExapleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}