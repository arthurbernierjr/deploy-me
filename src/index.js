import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import Other from './Other';
import reportWebVitals from './reportWebVitals';

const routes = [
  {
    Component: Other,
    key: 'Other',
    path: '/other'
  },
  {
    Component: Other,
    key: 'Another',
    path: '/another'
  },
  {
    Component: App,
    key: 'Home',
    path: '/'
  }
]

function AppRouter () {
  return (
    <Router>
      <nav>
        {routes.map(route => <Link key={route.key} to={route.path}>{route.key}</Link>)}
      </nav>
      <Switch>
        {
          routes.map(({key, Component, path}) => (
            <Route
              key={key}
              path={path}
              component={props => <Component {...props} page={key} />}
              />))
        }
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
