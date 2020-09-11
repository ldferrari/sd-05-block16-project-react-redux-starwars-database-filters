import requisicaoAPI from '../api/data';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const FILTER_NAME = 'FILTER_NAME';
export const COMBINA_ACTIONS = 'COMBINA_ACTIONS';

// Forma de fazer action by Zambelli 03/09/2020

const ACTIONS = {
  REQUEST_API,
  RECEIVE_API,
  FILTER_NAME,
  COMBINA_ACTIONS,
};

export default ACTIONS;

/* consultado
https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
 Exclui a função de dentro para implementar em outro arquivo */

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveApi = (planetas) => ({
  type: RECEIVE_API,
  payload: planetas,
});

export const filter = (nome) => ({
  type: FILTER_NAME,
  payload: nome,
});

export const combinaActions = ({column, comparison, value}) => ({
  type: COMBINA_ACTIONS,
  column,
  comparison,
  value,
});

export function fetchAllPlanets() {
  return (dispatch) => {
    dispatch(requestApi());
    return requisicaoAPI()
      .then((dados) => dispatch(receiveApi(dados)));
  };
}
