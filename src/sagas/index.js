import { watchFindContact, watchFindAllContact, watchSaveContact, watchDeleteContact, watchPostContact} from './contact';
import {all, fork} from 'redux-saga/effects';

export default function* sagas () {
    yield all([
        fork(watchFindContact),
        fork(watchFindAllContact),
        fork(watchPostContact),
        fork(watchSaveContact),
        fork(watchDeleteContact)
    ]);
};