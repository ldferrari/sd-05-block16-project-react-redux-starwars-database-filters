import { combineReducers } from 'redux';
import { CHAMAR_API, SUCESSO_API, FILTRO_NOME, FILTRO_NUMEROS } from '../actions';

// reducer estado inicial
const initialState = {
  data: [],
  isFetching: true,
};
// Função que renderiza API com 2 cases: Um chama dados e outro que já chamou com sucesso
function reducerApi(state = initialState, action) {
  switch (action.type) {
    case CHAMAR_API:
      return { ...state, isFetching: action.isFetching };
    case SUCESSO_API:
      return { ...state, isFetching: action.isFetching, data: action.data.results };
    default:
      return state;
  }
}
// Objeto com os filtros iniciais
const initialFilters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  selectedOption: [
    '',
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ],
};

function filters(state = initialFilters, action) {
  switch (action.type) {
    case FILTRO_NOME:
      return { ...state, filterByName: { name: action.name } };
    case FILTRO_NUMEROS:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.filtro],
        selectedOption: state.selectedOption.filter((option) => option !== action.column),
      };
    default:
      return state;
  }
}

/* function filterComparison(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    case 'menor que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    case 'igual a':
      return allPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    default:
      return allPlanets;
  }
} */

// combinação dos reducers a serem passados pra store

const rootReducer = combineReducers({
  reducerApi,
  filters,
  /* filterComparison, */
});

export default rootReducer;
