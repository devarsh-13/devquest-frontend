import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              isLogin
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              !isLogin
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}
