import React, { Component } from 'react';
import { handleAsyncFetch } from '../reducers';
import { connect } from 'react-redux';

class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { test: 'api' };
  // }

  componentDidMount() {
    const { handleAsync } = this.props;

    handleAsync();
  }

  // renderLoading() {
  //   if(this.props.isfetching) return <div>Loading...</div>;
  // }

  render() {
    const { isfetching, data } = this.props;
    return (
      <div>
        StarWars Datatable with Filters <br></br>
        {isfetching && <h1>Loading...</h1>}

        <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation period</th>
            <th>orbital period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
          {!isfetching && data.map(planet => (
            <tbody key={planet.name}>
              <tr>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAsync: (e) => dispatch(handleAsyncFetch(e)),
});

const mapStateToProps = (state) => ({
  isfetching: state.requestReducer.isfetching,
  data: state.requestReducer.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);


// climate: "arid"
// created: "2014-12-09T13:50:49.641000Z"
// diameter: "10465"
// edited: "2014-12-20T20:58:18.411000Z"
// films: (5) ["https://swapi-trybe.herokuapp.com/api/films/1/", "https://swapi-trybe.herokuapp.com/api/films/3/", "https://swapi-trybe.herokuapp.com/api/films/4/", "https://swapi-trybe.herokuapp.com/api/films/5/", "https://swapi-trybe.herokuapp.com/api/films/6/"]
// gravity: "1 standard"
// name: "Tatooine"
// orbital_period: "304"
// population: "200000"
// residents: (10) ["https://swapi-trybe.herokuapp.com/api/people/1/", "https://swapi-trybe.herokuapp.com/api/people/2/", "https://swapi-trybe.herokuapp.com/api/people/4/", "https://swapi-trybe.herokuapp.com/api/people/6/", "https://swapi-trybe.herokuapp.com/api/people/7/", "https://swapi-trybe.herokuapp.com/api/people/8/", "https://swapi-trybe.herokuapp.com/api/people/9/", "https://swapi-trybe.herokuapp.com/api/people/11/", "https://swapi-trybe.herokuapp.com/api/people/43/", "https://swapi-trybe.herokuapp.com/api/people/62/"]
// rotation_period: "23"
// surface_water: "1"
// terrain: "desert"
// url: "https://swapi-trybe.herokuapp.com/api/planets/1/"