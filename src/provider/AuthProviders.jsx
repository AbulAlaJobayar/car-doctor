import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, sateLoader] = useState(true);


    const createUser = (email, password) => {
        sateLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

const SingIn=(email,password)=>{
  return signInWithEmailAndPassword(auth, email, password);
}



    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (user) => {
            setUser(user);
            sateLoader(false);
        });
        return () => {
            return unsubscrib()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        SingIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;