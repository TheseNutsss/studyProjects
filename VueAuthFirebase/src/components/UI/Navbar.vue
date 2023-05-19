<script>
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
export default {
    name: 'my-navbar',
    data () {
      return {
          
      }
    },
    methods: {
      handleSignOut(){
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    },
   
}
</script>

<template>
  <div class="navbar">
    <div class="btn_nav" @click="$router.push('/')">Главная</div>
    <div class="btn_login btn_nav" @click="$router.push('/auth')" v-if="!$store.state.user">Войти</div>
    <div class="btn_registration btn_nav" @click="$router.push('/registration')" v-if="!$store.state.user">Регистрация</div>
    <div class="btn_signOut btn_nav" @click="handleSignOut" v-if="$store.state.user">Выйти</div>
    </div>
</template>

<style>
.navbar{
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-content: space-between;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}
.btn_nav{
  padding: 16px 12px;
}
.btn_nav:hover{
  cursor: pointer;
  background-color: blanchedalmond;
  transition: 0.5s ease-in;
  color:black;
}
</style>
