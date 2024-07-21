import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
          alt="backGround"
        />
      </div>
      <form className=" p-12 bg-black w-3/12 absolute my-40 right-0 left-0 mx-auto text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold p-2 pb-6 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 rounded-md bg-opacity-60 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 rounded-md bg-opacity-60 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 rounded-md bg-opacity-60"
        />
        <button className="p-3 my-5 bg-red-800 w-full border-r-3 rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignInToggle} className="cursor-pointer">
          {isSignIn ? "New to Netflix? Sign Up Now" : "Existing User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
