<script>
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
export default {
    name: 'my-registration',
    data (){
      return {
        email: "",
        password: "",
        errMsg: "" || localStorage.getItem("errMsg"),
        error: ""
      }
    },
    methods: {
      async registration(e){
        e.preventDefault();
        if(this.email && this.password){
          this.email = this.email.trim()
          this.password = this.password.trim()
          if(this.email.includes("@") && this.email.includes(".") && this.email.length > 3 && this.password.length > 9){
            try{
              await this.$store.dispatch('signup', {
              email: this.email,
              password: this.password
            })
            if(!this.$store.state.isError){
              this.$router.push('/auth')
              this.$store.commit('setCustomAlert', 'Аккаунт успешно создан')
            }
            } catch {
              ///сделать комит в vuex с setCustomError
              this.$store.commit('setCustomError', "Произошла ошибка на сервере, повторите попытку")
            }
          } else {
            this.$store.commit('setCustomError', "Что-то пошло не так, проверьте коректность данных")
            /* setTimeout(()=>{
                this.$store.commit('setCustomError', false)
              }, 5000) */
            this.email = ''
            this.password = ''
          }
        }
      },
      async signInWithGoogle(){
        try{
          await this.$store.dispatch('signInWithGoogle', {
          email: this.email,
          password: this.password
          })
          this.$router.push('/')
          localStorage.setItem('alertMsg', "Аккаунт успешно создан")
        } catch {
          this.$store.commit('setCustomError', "Произошла ошибка на сервере, повторите попытку")
        }
      },
      closeErrMsg(){
        this.$store.commit('setCustomError', false)
      },
    }
}

</script>

<template>
  <form>
    <div class="registration_wrapp">
      
      <h1>Регистрация</h1>
      <input type="text" placeholder="Email" v-model="email" required/>
      <input type="password" placeholder="Password" v-model="password" required minlength="10" maxlength="50"/>
      <p class="errMsg" v-if="$store.state.isError">{{ $store.state.isError }} <span @click="closeErrMsg">✕</span></p>
      <button class="reg" @click="registration" type="submit">Зарегистрироватся</button>
      <button @click="signInWithGoogle">Войти с помощью google</button>
    
    </div>
  </form>
</template>

<style>
.registration_wrapp {
  display: flex;
  flex-flow: column wrap;
  position: absolute;
  top: 40%;
  left: 45%;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.registration_wrapp *{
  padding: 5px;
  margin-bottom: 5px;
}
.registration_wrapp input:hover, .registration_wrapp button:hover{
  cursor: pointer;
}



</style>
