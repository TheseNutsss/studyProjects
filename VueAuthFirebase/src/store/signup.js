import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
export default {
    actions: {
        async signup (context, {email, password}) {
           await createUserWithEmailAndPassword(getAuth(), email, password)
            .then(userData => {
                console.log('Successfully registered!')
                //context.commit('setUser', userData.user)
                context.commit('setCustomError', false)     
            })
            .catch((error)=> {
                console.log(error.code)
            })
            
        }, 
        async signInWithGoogle (context){
            const provider = new GoogleAuthProvider()
            await signInWithPopup(getAuth(), provider)
            .then(userData => {
                console.log('Successfully signed in with Google')
                context.commit('setUser', userData.user)
            }).catch((error) =>{
                console.log(error.code)
            })
        }  
    }
}