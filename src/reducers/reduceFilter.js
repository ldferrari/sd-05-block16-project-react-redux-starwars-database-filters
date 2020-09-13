import ACTIONS from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};

const reduceFilters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FILTER_NAME:
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    case ACTIONS.COMBINA_ACTIONS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          }],
      };
    default:
      return state;
  }
};

export default reduceFilters;