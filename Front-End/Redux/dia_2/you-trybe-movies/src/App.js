import React from 'react'
import './App.css';
import { connect } from 'react-redux';
import { actionCreator, clickCounter, eraseNumbers } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, dispatch, countClicks } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter())
    }
    return (
      <div className='theme'>
        <header className='header-container'>
          <h1> Counter </h1>
          <h2> { countState } </h2>
          <button type='button' onClick={ () => dispatchAll() }>Increment one</button>
          <button type='button' onClick={ () => dispatchAll(5) }>Increment five</button>
          <h3> Number of clicks {countClicks} </h3>
        </header>
        <div>
          <button className='btn-erase' onClick={ () => dispatch(eraseNumbers()) }>Erase numbers</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  countClicks: state.counterReducer.clicks,
})

export default connect(mapStateToProps)(App);
