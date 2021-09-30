import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  sendRegistrationDataAction,
  setConfirmPasswordAction,
  setEmailAction,
  setPasswordAction,
  setUsernameAction,
} from "src/core";
import { getRegistrationSelector } from "src/core/selectors/registrationSelectors";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "../../helpers";
// import { login } from "../../router/utils";
import { ButtonCommon } from "../atoms/ButtonCommon";
import { InputCommon } from "../atoms/InputCommon";

import { Title } from "../atoms/Title";
import { MainTemplate } from "../templates/MainTemplate";
// import { useHistoryPush } from "./useHistoryPush";

export const Registration = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { password, confirmPassword, email, userName, error } = useSelector(
    getRegistrationSelector
  );

  const isValidUserName = validateName(userName);
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);
  const isValidConfirmPassword = validateConfirmPassword(
    password,
    confirmPassword
  );

  const loginUser = () => {
    if (
      isValidUserName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      dispatch(
        sendRegistrationDataAction({
          username: userName,
          password,
          email,
        })
      );
      // history.push("/users");
    }
  };

  return (
    <MainTemplate
      titleBlock={<Title title={"Registration"} />}
      main={
        <div className="form">
          <InputCommon
            value={userName}
            onChangeHandler={(text: string) =>
              dispatch(setUsernameAction(text.trim()))
            }
            title={"User name"}
            isValid={isValidUserName}
            autoFocus={true}
          />
          <InputCommon
            value={email}
            onChangeHandler={(text: string) =>
              dispatch(setEmailAction(text.trim()))
            }
            title={"Email"}
            isValid={isValidEmail}
          />
          <InputCommon
            value={password}
            onChangeHandler={(text: string) =>
              dispatch(setPasswordAction(text.trim()))
            }
            title={"Password"}
            isValid={isValidPassword}
          />
          <InputCommon
            value={confirmPassword}
            onChangeHandler={(text: string) =>
              dispatch(setConfirmPasswordAction(text.trim()))
            }
            title={"Confirm Password"}
            isValid={isValidConfirmPassword}
          />

          {error}

          <ButtonCommon
            isValid={
              isValidUserName &&
              isValidEmail &&
              isValidPassword &&
              isValidConfirmPassword
            }
            onClick={loginUser}
          >
            Login
          </ButtonCommon>
        </div>
      }
    />
  );
};

// const [userName, setUserName] = useState("");
// const [email, setEmail] = useState("");

// const inputRef = useRef<HTMLInputElement>(null);

// const goToUsers = useHistoryPush("/users");
// login(userName);
// history.push("/users");
// goToUsers();
// useEffect(() => {
//   inputRef.current?.focus();
// }, []);
