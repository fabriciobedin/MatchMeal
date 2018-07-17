import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDFqkVF9xpLxFHcjGAtldQs3qofdGoUSwA",
    authDomain: "mathmeal.firebaseapp.com",
    databaseURL: "https://mathmeal.firebaseio.com",
    projectId: "mathmeal",
    storageBucket: "mathmeal.appspot.com",
    messagingSenderId: "57841852836"
  };


  export default class ConfigStore {
    constructor() {
      firebase.initializeApp(config)
      this.splashTime = 1000
      this.splashImg = require('../../images/splash.jpg')
      this.loginBG = require('../../images/login.jpg')
    }
    get SplashImg() {
      return this.splashImg
    }
    get SplashTime() {
      return this.splashTime
    }
    get LoginBG() {
      return this.loginBG
    }
  }
