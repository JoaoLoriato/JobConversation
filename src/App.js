import React, {Component} from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from 'firebase';

import Routes from "./Routes";
import reducers from "./reducers/index"

class App extends Component {

  componentWillMount(){

    firebase.initializeApp({
      apiKey: "AIzaSyDeeegKm19ezxbkBMohoKTFXUtJY9y8IZg",
      authDomain: "jobconversation.firebaseapp.com",
      databaseURL: "https://jobconversation.firebaseio.com",
      projectId: "jobconversation",
      storageBucket: "jobconversation.appspot.com",
      messagingSenderId: "609439388170"

    });

  }

  render(){
    return (
     <Provider store={createStore(reducers)}>
     <Routes />
     </Provider> 
    )
  }
};

export default App;