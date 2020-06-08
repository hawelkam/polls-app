import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import QuestionPage from '../question/QuestionPage';
import NewQuestion from '../question/NewQuestion';
import Leaderboard from '../leaderboard/Leaderboard';
import { handleInitialData } from '../../actions/shared';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <Router>
      <Fragment>
        <div className='container'>
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/question/:id' component={QuestionPage} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/' exact component={Dashboard} />
                <Route path='/login' exact component={Login} />
              </div>}
        </div>
      </Fragment>
    </Router>
    );
  } 
}

function mapStateToProps ( { users }) {
  return {
    loading: Object.entries(users).length === 0
  }
}

export default connect(mapStateToProps)(App);
