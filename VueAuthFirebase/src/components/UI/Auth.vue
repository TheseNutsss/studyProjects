<script>
export default {
    name: 'my-auth',
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      async signIn(){
        try{
          await this.$store.dispatch('login', {
            email: this.email, 
            password: this.password
          })
          if(this.$store.state.user){
            this.$router.push('/')
          }
        } catch (e){
          console.log(e)
        }
      },
     async signInWithGoogle(){
        try{
          await this.$store.dispatch('signInWithGoogle', {
            email: this.email,
            password: this.password
          })
          this.$router.push('/')
          this.$store.commit('setCustomAlert', 'Вы успешно авторизировались')
        } catch (err) {
          console.log(err.message)
        }
      },
      closeAlertMsg(){
        this.$store.commit('setCustomAlert', false)
      },
      closeErrMsg(){
        this.$store.commit('setCustomError', false)
      },
    }
}

</script>

<template>
    <div class="auth_wrapp">
      <h1>Войти</h1>
      <p class="alertMsg" v-if="$store.state.isAlert">{{ $store.state.isAlert }} <span @click="closeAlertMsg">✕</span></p>
      <input type="text" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <p class="errMsg" v-if="$store.state.isError">{{ $store.state.isError }} <span @click="closeErrMsg">✕</span></p>
      <button class="auth" @click="signIn">Войти</button>
      <button @click="signInWithGoogle">Войти с помощью google </button>
    </div>
</template>

<style>
.auth_wrapp {
  display: flex;
  flex-flow: column wrap;
  position: absolute;
  top: 40%;
  left: 45%;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.auth_wrapp *{
  padding: 5px;
  margin-bottom: 5px;
}
.auth_wrapp input:hover, .auth_wrapp button:hover{
  cursor: pointer;
}


</style>

