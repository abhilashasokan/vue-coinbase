// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app;
var config = {
    apiKey: "AIzaSyAyd1sBULSMOU9Q3iNAzq_Jr1trXZUZtlE",
    authDomain: "sweetgodzillas-altcoin.firebaseapp.com",
    databaseURL: "https://sweetgodzillas-altcoin.firebaseio.com",
    projectId: "sweetgodzillas-altcoin",
    storageBucket: "",
    messagingSenderId: "1090435998966"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
});