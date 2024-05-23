import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "./features/PersonalHomepage/personalHomepageSaga";
import { themeSaga } from "../src/features/Theme/themeSaga";

export default function* saga() {
  yield all([
    personalHomepageSaga(),
    themeSaga(),
  ]);
};