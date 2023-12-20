import bgVideo from "../video/cookin_2.mp4";

function Login() {
  return (
    <>
      <div className="h-screen relative">
        <video
          className="absolute h-screen w-screen object-cover z-[-1]"
          muted
          autoPlay
          loop
          src={bgVideo}
        ></video>
        <div className="grid place-items-center w-full h-screen bg-black bg-opacity-20">
          <div className="bg-white p-8 bg-opacity-60 rounded-md max-w-md w-full">
            <h1 className="text-4xl mb-4 text-center text-black">Login</h1>
            <form className="flex flex-col gap-5">
              <label className="form-label">
                <span>Your email</span>
                <input type="email" placeholder="Enter your email" />
              </label>
              <label className="form-label">
                <span>Your password</span>
                <input type="password" placeholder="Enter your password" />
              </label>
              <button className="btn bg-emerald-600 py-2 px-3 rounded-md text-lg">
                Login
              </button>
              <p className="text-center text-base">
                Don't have an account?{" "}
                <a className="text-lime-700" href="/signup">
                  Signup
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
