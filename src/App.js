import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Transactions from './Components/Transactions';
import DeleteAccounts from './Components/DeleteAccounts';
import Balance from './Components/Balance';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {window.location.hash === '#/' ? null : <Header />}
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/transactions' component={Transactions} exact/>
          <Route path='/accounts/delete-account' component={DeleteAccounts} />
          <Route path='/balance' component={Balance}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
