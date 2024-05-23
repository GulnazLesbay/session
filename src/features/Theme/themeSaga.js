import { select, call, takeLatest } from "@redux-saga/core/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { saveIsDarkThemeInLocalStorage } from "./isDarkThemeLocalStorage";

function* saveIsDarkThemeLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveIsDarkThemeInLocalStorage, isDarkTheme);
}

export function* themeSaga() {
  yield takeLatest(toggleTheme.type, saveIsDarkThemeLocalStorageHandler);
}
