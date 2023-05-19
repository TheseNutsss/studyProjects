import { getAuth, signOut} from 'firebase/auth'
export default {
    actions: {
        async logout(context){
            await signOut(getAuth())
            context.commit('setUser', null)
        }
    }
}