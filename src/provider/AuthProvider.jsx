import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContex = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        createUser

    }

    return (
        <AuthContex.Provider>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;