import {combineReducers} from 'redux';
import { findAllContact, findContact, saveContact, deleteContact, postContact } from './contact';

const allReducers= combineReducers({
  contact : findContact,
  contacts: findAllContact,
  postContact,
  saveContact,
  deleteContact,
});
export default allReducers;