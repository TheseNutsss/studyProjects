import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import router from '../router/router'
export default {
    actions: {
        async login(context, {email, password}) {
            await signInWithEmailAndPassword(getAuth(), email, password)
            .then((userData) => {
              context.commit('setUser', userData.user)    
            console.log('Successfully signed in!')
            })
          .catch((e)=> {
            console.log(e.code)
            switch (e.code) {
              case 'auth/invalid-email':
                localStorage.setItem("errMsg", "Неверный email")
                context.commit('setCustomError', "Неверный email")
                setTimeout(() => {
                  context.commit('setCustomError', false)
                }, 5000);
                break
              case 'auth/user-not-found':
                localStorage.setItem("errMsg", "Пользователь с таким email не зарегистрирован")
                context.commit('setCustomError', "Пользователь с таким email не зарегистрирован")
                setTimeout(() => {
                  context.commit('setCustomError', false)
                }, 5000);
                break
              case 'auth/wrong-password':
                localStorage.setItem("errMsg", "Неверный пароль")
                context.commit('setCustomError', "Неверный пароль")
                setTimeout(() => {
                  context.commit('setCustomError', false)
                }, 5000);
                break
            }
          })
        }
    }
}