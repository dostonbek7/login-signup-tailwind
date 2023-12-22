import { Link } from "react-router-dom";
import BgVideo from "../video/cooking.mp4";
import useSignup from "../hooks/useSignup";
import { useRef } from "react";
import { toast } from "react-toastify";

function Signup() {
  const { user, error, signup } = useSignup();
  const form = useRef();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );
    
    form.current.reset()
  };
  return (
    <>
      <div className="h-screen relative">
        <video
          className="absolute h-screen w-screen object-cover z-[-1]"
          muted
          autoPlay
          loop
          src={BgVideo}
        ></video>
        <div className="grid place-items-center w-full h-screen bg-black bg-opacity-60">
          <div className="bg-white p-8 bg-opacity-60 rounded-md max-w-md w-full">
            <h1 className="text-4xl mb-4 text-center text-black">Sign up</h1>
            <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-5">
              <label className="form-label">
                <span>Your name</span>
                <input
                  ref={displayName}
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
              <label className="form-label">
                <span>Your email</span>
                <input
                  ref={email}
                  type="email"
                  placeholder="Enter your email"
                />
              </label>
              <label className="form-label">
                <span>Your password</span>
                <input
                  ref={password}
                  type="password"
                  placeholder="Enter your password"
                />
              </label>
              <button className="btn bg-emerald-600 py-2 px-3 rounded-md text-lg">
                Signup
              </button>
              <p className="text-center text-base">
                Already have an account?{" "}
                <a className="text-lime-700" href="/login">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
