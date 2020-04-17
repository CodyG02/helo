import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom'
// import {matchPath} from 'react-router-dom'

function App(props) {
  // console.log(props)
  // const {/} = props.location.pathname
  return (
    <div className="App">
      
      {props.location.pathname === '/' ? null : <Nav/>}
      {/* {matchPath(props.location.pathname, {path: '/'}) ? <></> : <Nav/> } */}
      {routes}
    </div>
  );
}

export default withRouter(App)
