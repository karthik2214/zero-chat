import React, { useContext } from "react";
import { Context } from "../context";
import router, { Router, useRouter } from "next/dist/client/router";
import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if ((username.length === 0 || secret, length === 0)) {
      return axios
        .put(
          "https://api.chatengine.io/users/",
          {
            username,
            secret,
          },
          { headers: { "Private-key": "71a299bc-65e0-4a63-bf13-582030445c68" } }
        )
        .then((r) => router.push("/chats"));
    }
  }
  return (
    <div className="login">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">ZERO chat</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
