import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import {Provider} from 'react-redux'
import store from './store/index'
import {Route,BrowserRouter as Router,Link,Redirect} from 'react-router-dom'
import Home from './components/pages/home'
const About = () =>{
  return <h1>about</h1>
}

const Login = () =>{
  return <h1>login</h1>
}

let loginFlag = false

const Us = () =>{
  return (
    <Route>
      {loginFlag 
        ? (<h1>Us</h1>) 
        :(
          <Redirect to={{pathname:"/login"}}/>
        )}
    </Route>
  )
}

function App() {
  return (
    <Provider store={store}>
      <FilterableProductTable/>
      <button onClick={()=> {loginFlag = !loginFlag}}>{ loginFlag ? "log out" :'log in'}</button>
      <Router>
        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/us">us</Link></li>
          <Route path="/home" component={Home}/>
         <Route path="/about" component={About}></Route>
         <Route path="/Us" component={Us}></Route>
         <Route path="/Login" component={Login}></Route>
          
        </ul>
      </Router>
    </Provider>
  );
}

export default App;
