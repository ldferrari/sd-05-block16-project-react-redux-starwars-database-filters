import React from 'react';
import { connect } from 'react-redux';
import cleanFilter from '../actions/cleanFilter';

class FilterNumberOptions extends React.Component {
  render() {
    const { click, filterByNumericValues } = this.props;
    return (
    <div>
      {filterByNumericValues.map((e, index) => (
        <div key={index}>
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.value}</div>
          <button type="button" onClick={() => click(e.column, e.comparison, e.value)}>Remover</button>
        </div>
      ))}
    </div>
  );
  }  
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filter.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  click: (column, comparison, value) => dispatch(cleanFilter(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumberOptions);
