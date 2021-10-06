import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/atoms/Title";
import { ConfirmationRegistration } from "./components/pages/ConfirmationRegistration";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { NotFound } from "./components/pages/NotFound";
import { Registration } from "./components/pages/Registration";
import { User } from "./components/pages/User";
import { Users } from "./components/pages/Users";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import { Posts } from "./components/pages/Posts";
import { MyPosts } from "./components/pages/MyPosts";

function App() {
  // const loggedIn = false;
  // console.log({ loggedIn });
  // if (!loggedIn) {
  //   <Redirect to="/login" />;
  // }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute component={Home} path="/" exact />
          <PublicRoute component={Registration} path="/registration" exact />
          <PublicRoute
            component={ConfirmationRegistration}
            path="/activate/:uid/:token"
            exact
          />
          <PublicRoute component={Login} path="/login" exact />
          <PrivateRoute component={User} path="/users/:id" exact />
          <PrivateRoute component={Users} path="/users" exact />
          <PrivateRoute component={Posts} path="/posts" exact />
          <PrivateRoute component={MyPosts} path="/my-posts" exact />
          <PublicRoute component={NotFound} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// {
//   /* <Route exact path="/users/:id">
//             <User />
//           </Route>
//           <Route exact path="/users">
//             <Users />
//           </Route>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/login">
//             <Title title={"Login"} />
//           </Route> */
// }

// {
//   /* <Route>
//             <Title title={"Not found"} />
//           </Route> */
// }
