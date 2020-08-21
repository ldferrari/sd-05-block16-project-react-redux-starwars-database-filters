import StarWarsPlanetsAPI from '../../services/StarWarsPlanetsAPI';

export const REQUISICAO_BEM_SUCEDIDA = 'REQUISICAO_BEM_SUCEDIDA';
export const FAZENDO_REQUISICAO_API = 'FAZENDO_REQUISICAO_API';
//Levar em consideraçao o action pq está vindo da API e depois o reducer(ver ser os nomes estão coincidindo)
// Actions retornam objetos
export const fazendoRequicaoAPI = () => ({ /* Informa que eu estou fazendo uma Requisição na API */
  type: FAZENDO_REQUISICAO_API,
  fazendoRequisicao: true,
});

export const requicaoBemSucedida = (planets) => ({ /* Informa que a requisição foi bem sucedida */
  type: REQUISICAO_BEM_SUCEDIDA,
  resultPlanets: planets.results, /* Puxando o results da StarWarsPlanetsAPI.js */
});

// Actions creator retorna uma função
export function fetchAPIStarWarsPlanets() { /* essa função chama a Api que está em services/StarWarsPlanetsAPI.js */
  return (dispatch) => { //Ação sincrona para verificar a requisição
    dispatch(fazendoRequicaoAPI());
    return StarWarsPlanetsAPI() // Ação assincrona para receber informações da API
      .then(
        (planet) => dispatch(requicaoBemSucedida(planet)));
  };
}

/* Estrutura retirada dos exercícios do bloco 16 */