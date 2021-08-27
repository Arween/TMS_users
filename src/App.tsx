import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Filter } from "./components/molecules/Filter";
import { UserList } from "./components/molecules/UserList";
import { InputSearch } from "./InputSearch";
import { users } from "./mock";

function App() {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchValue, setSearchValue] = useState("");

  const defaultSortSettings = [
    {
      title: "Rating",
      field: "rating",
      isActive: false,
    },
    {
      title: "Year",
      field: "year",
      isActive: false,
    },
  ];

  const [sortSettings, setSortSettings] = useState(defaultSortSettings);

  const onChangeHandler = (text: string) => {
    // console.log({ text });
    setSearchValue(text);
    // console.log({ searchValue });
    if (text.length > 2) {
      const newUsers = users.filter(({ first_name }) =>
        first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      setFilteredUsers(newUsers);
      return;
    }

    setFilteredUsers(users);
  };

  const onClick = () => {
    const newUsers = users.filter(({ first_name }) =>
      first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    console.log("onClick");
    const users5 = [...users].sort((a, b) => a.age - b.age);
    console.log({ users5, users });
    setFilteredUsers(users5);
  };

  const handlerSorting = (field: string) => {
    console.log("handlerSorting", { field });
  };
  return (
    <div className="App">
      <main>
        <Filter sortSettings={sortSettings} onClick={handlerSorting} />
        {filteredUsers?.length ? (
          <>
            {/* <InputSearch
              value={searchValue}
              onChangeHandler={onChangeHandler}
              onClick={onClick}
            /> */}
            <h3 className={"h3"}>Users</h3>
            <UserList users={filteredUsers} title={"Tile new"} />
          </>
        ) : (
          <p>No user</p>
        )}
      </main>
    </div>
  );
}

export default App;

// {/* <p>Вы кликнули {count} раз(а)</p>
//   <button onClick={handlerClick}>Нажми на меня</button> */}
//   {/* <Title title={"Selected user"} /> */}
//   {/* <UserCard {...selectedUser} /> */}
//   {/* <UserProfile
//     // colors={[{ color: "dsdfs" }]}
//     // name={"sadasd"}
//     // color={{ color: "sdfsdf" }}
//     {...profile}
//   /> */}
