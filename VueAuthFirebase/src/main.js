import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI/index.js'
import router from './router/router.js'
import store from './store/store.js'
const app = createApp(App)
components.forEach(component => app.component(component.name, component));
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt_BSBOWqbVRoKk14WZgETiTnGOeeJ1F0",
  authDomain: "auth-abeb6.firebaseapp.com",
  projectId: "auth-abeb6",
  storageBucket: "auth-abeb6.appspot.com",
  messagingSenderId: "1096698688842",
  appId: "1:1096698688842:web:f98e189eeddb6af94f7db3"
};
router.beforeEach((to, from) => {
  if()
})

initializeApp(firebaseConfig);
app
.use(store)
.use(router)
.mount("#app")
