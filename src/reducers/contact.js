import {
  FIND_CONTACT, 
  FIND_CONTACT_ERROR, 
  FIND_CONTACT_SUCCESS,
  FIND_ALL_CONTACT, 
  FIND_ALL_CONTACT_SUCCESS,
  FIND_ALL_CONTACT_ERROR,
  POST_CONTACT,
  POST_CONTACT_ERROR,
  POST_CONTACT_SUCCESS,
  SAVE_CONTACT,
  SAVE_CONTACT_ERROR,
  SAVE_CONTACT_SUCCESS,
  DELETE_CONTACT,
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_SUCCESS
} from '../actions/contact';

export function findContact(state ={ data : null, loading: false} , action) {
  switch (action.type) {
    case FIND_CONTACT:
      return {
        data : null,
        loading: true,
        error: null
      };
    case FIND_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function findAllContact(state = { data : [], loading: false}, action) {
  switch (action.type) {
    case FIND_ALL_CONTACT:
      return {
        data : [],
        loading: true,
        error: null
      };
    case FIND_ALL_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_ALL_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function saveContact(state ={ data : null, loading: false} , action) {
  switch (action.type) {
    case SAVE_CONTACT:
      return {
        data : null,
        loading: true,
        error: null
      };
    case SAVE_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case SAVE_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function postContact(state ={ data : null, loading: false} , action) {
  switch (action.type) {
    case POST_CONTACT:
      return {
        data : null,
        loading: true,
        error: null
      };
    case POST_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case POST_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function deleteContact(state ={ data : null, loading: false} , action) {
  switch (action.type) {
    case DELETE_CONTACT:
      return {
        data : null,
        loading: true,
        error: null
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case DELETE_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}