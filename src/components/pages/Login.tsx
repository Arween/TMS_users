import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { validateEmail, validateName } from "../../helpers";
import { login } from "../../router/utils";
import { ButtonCommon } from "../atoms/ButtonCommon";
import { InputCommon } from "../atoms/InputCommon";

import { Title } from "../atoms/Title";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const history = useHistory();
  console.log({ history });
  const isValidUserName = validateName(userName);
  const isValidEmail = validateEmail(email);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const loginUser = () => {
    if (isValidUserName && isValidEmail) {
      console.log("login");
      login(userName);
      history.push("/users");
    }
  };

  return (
    <div className="App">
      <main>
        <Title title={"Login"} />
        <form className="form">
          <InputCommon
            value={userName}
            onChangeHandler={(text: string) => setUserName(text)}
            title={"User name"}
            isValid={isValidUserName}
            inputRef={inputRef}
            autoFocus={true}
          />
          <InputCommon
            value={email}
            onChangeHandler={(text: string) => setEmail(text)}
            title={"Email"}
            isValid={isValidEmail}
          />

          <ButtonCommon
            isValid={isValidUserName && isValidEmail}
            onClick={loginUser}
          >
            Login
          </ButtonCommon>
        </form>
      </main>
    </div>
  );
};
