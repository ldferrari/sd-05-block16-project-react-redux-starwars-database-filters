import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from './actions/actions';
import TableData from './TableData';

class Table extends React.Component {

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Terrain</th>
              <th>Diameter</th>
              <th>Gravity</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Population</th>
              <th>Surface Water</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>url</th>
            </tr>
          </thead>
          <TableData />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchPlanets()),
});

// Para resolver o problema do codeclimate 'prop-type object is forbiden', utilizei a função InstanceOf que encontrei neste site: https://github.com/yannickcr/eslint-plugin-react/issues/2079

Table.propTypes = {
  fetchData: PropTypes.InstanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(Table);
