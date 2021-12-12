import { all } from "@redux-saga/core/effects";
import { watchAuthAsync } from "./ducks/auth/sagas";

export function* rootSaga() {
    yield all([watchAuthAsync()]);
}
