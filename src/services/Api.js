const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = async () =>
  fetch(API_URL)
    .then((response) =>
      response.json()
        .then(({ results }) => results)
        .catch((error) => error),
    )
    .catch((error) => error);