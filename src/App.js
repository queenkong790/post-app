

import Navbar from './navbar';
import Login from './login';

import { Component } from 'react';
import Fire from './fb/fire';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Post from './post';
import Search from './search';
//import { fireEvent } from '@testing-library/react';
//import Post from './post';
//import { auth } from "firebase/app";


/*
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Container style={{width : "400px"}}>
            <Login />
          </Container>
        
      </div>
    </div>
  );
}
*/

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      user: null,

    }
    this.authListener=this.authListener.bind(this)


  }
  
  componentDidMount(){
    this.authListener();
    //console.log("check");
  }

  authListener(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      this.setState({ user });
      
    } else {
      this.setState({ user:null });
  }
});
  }
  render(){
    return (
    <div className="App">
      <Navbar />
      
      <div className="content">
      { this.state.user ? ( <Post /> ) : ( <Login /> ) }
      </div>
    </div>
    );
  }
}
export default App;
