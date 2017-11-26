import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
   ADD_RECIPE,
   REMOVE_FROM_CALENDAR,
 } from '../actions'

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

function mapStateToProps (calendar) {
  const dayOreder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday']

  return {
    calendar: dayOreder.map((day) => ({
      day,
      meals: Object.assign({}, calendar[day])
    })),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(App);
