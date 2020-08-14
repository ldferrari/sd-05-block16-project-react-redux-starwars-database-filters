import { combineReducers } from 'redux';
import { REQUEST, DATA, FAIL, INPUT_NAME, SELECT_NUMBER} from '../actions';

const initialState = {
  fetching: false,
  data: [],
  error: '',
};

function planetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, fetching: true };
    case DATA:
      return { ...state, fetching: false, data: action.data };
    case FAIL:
      return { ...state, fetching: false, error: action.err };
    default:
      return state;
  }
}

const initialStateInput = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    }
  ]
};

function filters(state = initialStateInput, action) {
  switch (action.type) {
    case INPUT_NAME:
      // console.log(action.input);
      return {
        ...state,
        filterByName: {
          ...state.filterByName,
          name: action.input,
        },
      };
    case SELECT_NUMBER:
      return {
        ...state,
        filterByNumericValues: {
          ...state.filterByNumericValues,
          column: action.select,
          comparison: action.select,
          value: action.select,
        },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ planetReducer, filters });

export default rootReducer;
