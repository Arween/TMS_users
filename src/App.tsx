import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/atoms/Title";
import { UserCard } from "./components/atoms/UserCard";
import { UserList } from "./components/molecules/UserList";
import { users } from "./mock";

function App() {
  const selectedUser = users[0];

  return (
    <div className="App">
      <main>
        <Title title={"Selected user"} />
        <UserCard {...selectedUser} />

        {users?.length ? (
          <>
            <h3 className={"h3"}>Other users</h3>
            <UserList users={users} />
          </>
        ) : (
          <p>No user</p>
        )}
      </main>
    </div>
  );
}

export default App;
