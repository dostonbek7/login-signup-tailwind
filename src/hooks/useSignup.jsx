import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";
function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: user });
        setUser(user);
        toast.success("You signup successful")
      })
      .catch((error) => {
        setError(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(errorCode, errorMessage);
      });
  };
  return { user, error, signup };
}

export default useSignup;
