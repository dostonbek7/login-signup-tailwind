import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

function useSignup() {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signup = async (displayName, email, password) => {
    setIsPending(false)
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: user });
        setIsPending(false);
        setUser(user);
        setError(null)
        toast.success("You signup successful");
      })
      .catch((error) => {
        setError(error);
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error("This email is already in use");
      });
  };
  return { error, isPending, signup };
}


export default useSignup;
