import {
    setLoginLoadingStatus,
    setUser,
    setCheckAuthLoadingStatus,
    setMailConfirmLoadingStatus,
} from "./actions";
import { AuthService, IAuthResponse } from "services/AuthService";
import { takeEvery, call, put } from "redux-saga/effects";
import { AuthActionsType, IFetchLoginAction, IFetchMailConfirmAction } from "./contracts/actions";

export function* loginAsync({ payload }: IFetchLoginAction): any {
    try {
        const data: IAuthResponse = yield call(AuthService.login, payload);

        localStorage.setItem("token", data.accessToken);
        yield put(setUser(data.user));
        yield put(setLoginLoadingStatus("SUCCESS"));
    } catch (e) {
        yield put(setLoginLoadingStatus("ERROR"));
    }
}

export function* checkAuthAsync() {
    try {
        console.log("POPAL V SAGA");
        const data: IAuthResponse = yield call(AuthService.refresh);

        localStorage.setItem("token", data.accessToken);
        yield put(setUser(data.user));
        yield put(setCheckAuthLoadingStatus("SUCCESS"));
    } catch (e) {
        yield put(setCheckAuthLoadingStatus("ERROR"));
    }
}

export function* mailConfirmAsync({ payload }: IFetchMailConfirmAction) {
    try {
        console.log("ПОПАЛ В САГУ:");
        const data: IAuthResponse = yield call(AuthService.confirmMail, payload);

        localStorage.setItem("token", data.accessToken);
        yield put(setUser(data.user));
        yield put(setLoginLoadingStatus("AFTER_LOGIN"));

        yield put(setMailConfirmLoadingStatus("SUCCESS"));
    } catch (e) {}
}

export function* watchAuthAsync() {
    yield takeEvery(AuthActionsType.FETCH_LOGIN, loginAsync);
    yield takeEvery(AuthActionsType.FETCH_CHECK_AUTH, checkAuthAsync);
    yield takeEvery(AuthActionsType.FETCH_MAIL_CONFIRM, mailConfirmAsync);
}
