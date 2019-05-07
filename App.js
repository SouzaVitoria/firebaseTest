import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';

export default class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyB6TL7k8-jGnNWGb8UxF5ewdOQ-yAoirb8",
      authDomain: "configuracaofirebasereact-01.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereact-01.firebaseio.com",
      projectId: "configuracaofirebasereact-01",
      storageBucket: "configuracaofirebasereact-01.appspot.com",
      messagingSenderId: "506768811628",
      appId: "1:506768811628:web:7457731506f9ee1d"
    };
    firebase.initializeApp(firebaseConfig);
  }

  registerUser() {
    var email = 'vitoria.curso@gmail.com';
    var password = 'vitoria123';

    const user = firebase.auth();
    user.createUserWithEmailAndPassword(
      email,
      password
    ).catch(
      (erro) => {
        alert(erro.message)
      }
    )
  }

  checkLoggedUser() {
    const user = firebase.auth();
    const usuarioAtual = user.currentUser;
    if(usuarioAtual){
      alert('Logged User');
    }else{
      alert('Sign in');
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Button
          onPress={() => { this.registerUser(); }}
          title='Register User'
          accessibilityLabel='Register User'
        />
        <Button
          onPress={() => { this.checkLoggedUser(); }}
          title='Check Logged User '
          accessibilityLabel='Check the logged in user'
        />
      </SafeAreaView>
    );
  }
}