import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
vuetify,
render: h => h(App),
router:router,
store,
  created(){
var firebaseConfig = {
        apiKey: "AIzaSyBcIR36x_RFW-A8XK9iONwP-svtCHDtN1I",
        authDomain: "laba-22b10.firebaseapp.com",
        databaseURL: "https://laba-22b10-default-rtdb.firebaseio.com",
        projectId: "laba-22b10",
        storageBucket: "laba-22b10.appspot.com",
        messagingSenderId: "119947626715",
        appId: "1:119947626715:web:9b1ee2c774d18fab61a4fe",
        measurementId: "G-MC6CLBDHJ8"
      };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
}

}).$mount('#app')