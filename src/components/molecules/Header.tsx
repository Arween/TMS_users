import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setIsOpenHeader } from "src/core";
import { getAppState } from "src/core/selectors/appSelectors";

import { Title } from "../atoms/Title";

export const Header = memo(() => {
  const { isOpenHeader } = useSelector(getAppState);
  console.log({ isOpenHeader });

  const dispatch = useDispatch();

  const toggleMenu = useCallback(() => {
    dispatch(setIsOpenHeader(!isOpenHeader));
  }, [dispatch, isOpenHeader]);

  useEffect(() => {
    return () => {
      dispatch(setIsOpenHeader(false));
    };
  }, [dispatch]);

  return (
    <div className="header">
      <div className={"header-title"}>
        <button className="menu-btn" onClick={toggleMenu}>
          <div id="hamburger" className={isOpenHeader ? "open" : ""}>
            <div></div>
          </div>
        </button>

        <Title title={"Header"} />
      </div>

      {isOpenHeader && (
        <nav>
          <ul className={"menu"}>
            <li>
              <Link className={"app"} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/users/:id">User</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
});
