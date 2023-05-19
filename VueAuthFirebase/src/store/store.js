import {createStore} from 'vuex'
import auth from './auth'
import signup from './signup'
import logout from './logout'
import { StorageError } from 'firebase/storage'
export default createStore({
    state (){
        return {
            isError: false,
            isAlert: false,
            user: null
        }
    },
    mutations: {
        setUser(state, payload){
            state.user = payload
        },
        setCustomError(state, errorBody){
            state.isError = errorBody
            setTimeout(() => {
                state.isError = false
            }, 5000);
        },
        setCustomAlert(state, alertBody){
            state.isAlert = alertBody
            setTimeout(() => {
                state.isAlert = false
            }, 5000);

        }
    },
    actions: {
        
    },
    modules: {
        auth,
        signup,
        logout
    }
})