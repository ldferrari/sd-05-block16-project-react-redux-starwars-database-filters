import ACTIONS from '../action';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.FILTRAR_NOMES:
      return { ...state, filterByName: { name: action.name } };
    case ACTIONS.FILTRAR_VALORES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case ACTIONS.DELETA_FILTROS:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (filtro) => filtro.column !== action.column,
        ),
      };
    default:
      return state;
  }
}

export default filters;
