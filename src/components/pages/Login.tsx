import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  sendLoginDataAction,
  setEmailLoginAction,
  setPasswordLoginAction,
} from "src/core/actions/loginActions";
import { getLoginSelector } from "src/core/selectors/loginSelectors";
import { validateEmail, validatePassword } from "../../helpers";
// import { login } from "../../router/utils";
import { ButtonCommon } from "../atoms/ButtonCommon";
import { InputCommon } from "../atoms/InputCommon";

import { Title } from "../atoms/Title";
import { MainTemplate } from "../templates/MainTemplate";
// import { useHistoryPush } from "./useHistoryPush";

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { password, email } = useSelector(getLoginSelector);

  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  const loginUser = () => {
    if (isValidEmail && isValidPassword) {
      dispatch(
        sendLoginDataAction({
          password,
          email,
        })
      );
      // history.push("/users");
    }
  };

  return (
    <MainTemplate
      titleBlock={<Title title={"Login"} />}
      main={
        <div className="form">
          <InputCommon
            value={email}
            onChangeHandler={(text: string) =>
              dispatch(setEmailLoginAction(text.trim()))
            }
            title={"Email"}
            isValid={isValidEmail}
          />
          <InputCommon
            value={password}
            onChangeHandler={(text: string) =>
              dispatch(setPasswordLoginAction(text.trim()))
            }
            title={"Password"}
            isValid={isValidPassword}
          />

          <ButtonCommon
            isValid={isValidEmail && isValidPassword}
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
