import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { UserDataContext } from "../Providers/UserDataProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);
  const naviagte = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("ima clicked");
    const myObj = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      cart: [],
    };
    setIsLoginPage(true);

    const myobject = JSON.stringify(myObj);
    localStorage.setItem("token", myobject);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const findUser = localStorage.getItem("token");
    if (findUser) {
      const userData = JSON.parse(localStorage.getItem("token"));
      console.log(userData);
      setUser(userData);
      naviagte("/user/dashboard");
    } else {
      return alert("user does not exist");
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form className="flex flex-col gap-2">
        {isLoginPage === false ? (
          <input
            placeholder="Enter your name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-slate-400 p-2 rounded-md "
          />
        ) : (
          ""
        )}
        <input
          placeholder="Enter your email"
          type="text"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-400 p-2 rounded-md "
        />
        <input
          placeholder="Enter your password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-slate-400 p-2 rounded-md "
        />
        {isLoginPage === false ? (
          <Button onClick={handleSignUp}>Sign Up</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}

        <div className="mt-10 text-center ">
          {isLoginPage === true ? (
            <p
              className="text-blue-800 cursor-pointer"
              onClick={() => setIsLoginPage(false)}
            >
              Register
            </p>
          ) : (
            <p
              className="text-blue-800 cursor-pointer"
              onClick={() => setIsLoginPage(true)}
            >
              Login
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default React.memo(Login);
