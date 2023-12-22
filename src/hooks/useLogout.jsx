import { signOut } from "firebase/auth";
import { useState } from "react";
import {auth} from '../firebase/firebaseConfig'
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

function useLogout() {
  const { dispatch } = useGlobalContext();
  const [error, setError] = useState();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        toast.error("You logout")
      })
      .catch(() => {
        setError("Something went wrong :(");
      });
  };

  return { error, logout };
}

export default useLogout;
