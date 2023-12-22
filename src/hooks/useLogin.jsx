import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

function useLogin() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext()

  const login = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch({type:'LOGIN', payload: user})
      toast.success("You login succsessfuly")
    })
    .catch((error) => {
      setError(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      toast.error(errorCode, errorMessage);
    });
  }


  return {login, user, error}
}

export default useLogin