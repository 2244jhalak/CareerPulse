import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo={
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logOut
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            const userEmail=currentUser?.email || user?.email;
            const loggedUser ={email : userEmail};
            console.log('old user',currentUser);
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log('Token Response',res.data);
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`,loggedUser,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[user])

    return (
        <AuthContext.Provider value={authInfo}>
                 {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    
    children: PropTypes.node,
    
}

export default AuthProvider;