export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const filterByName = (input) => ({
  type: FILTER_BY_NAME,
  input,
});

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { name: action.input } } };
    default:
      return state;
  }
}

export default filters;
// {
//     filters: {
//       filterByName: {
//         name: 'Tatoo'
//       }
//     }
//   }
