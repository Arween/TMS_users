import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./../../App.css";
import { UserList } from "./../molecules";
import { users } from "./../../mock";

export const Users = () => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchValue, setSearchValue] = useState("");
  const [searchClickValue, setSearchClickValue] = useState("");

  const defaultSortSettings = [
    {
      title: "AGE",
      field: "age",
      isActive: false,
    },
    {
      title: "Email",
      field: "email",
      isActive: false,
    },
  ];

  const [sortSettings, setSortSettings] = useState(defaultSortSettings);

  const onChangeHandler = (text: string) => {
    // console.log({ text });
    setSearchValue(text);
    // console.log({ searchValue });
  };

  const onClick = () => {
    // setUncaughtExceptionCaptureCallback()
    // const newUsers = users.filter(({ first_name }) =>
    //   first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    // );
    // console.log("onClick");
    // const users5 = [...users].sort((a, b) => a.age - b.age);
    // console.log({ users5, users });
    // setFilteredUsers(users5);
    // getUsers();
  };

  const handlerSorting = (field: string) => {
    console.log("handlerSorting", { field });

    const firstUser = users[0] as any;

    const newSettings = sortSettings.map((setting) => ({
      ...setting,
      isActive: setting.field === field,
    }));

    setSortSettings(newSettings);

    if (typeof firstUser[field] === "number") {
      const newUsers = [...users].sort((a: any, b: any) => a[field] - b[field]);
      setFilteredUsers(newUsers);
      return;
    }

    // const newUsers = [...users].sort((a: any, b: any) => a[field] - b[field]);
    const newUsers = [...users].sort((a: any, b: any) =>
      a[field].localeCompare(b[field])
    );

    setFilteredUsers(newUsers);
  };

  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("count2 changed!");
    // getUsers();
    if (searchValue.length > 2) {
      const newUsers = users.filter(({ first_name }) =>
        first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      setFilteredUsers(newUsers);
      return;
    }

    setFilteredUsers(users);
  }, [searchValue]);

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const onClickUser = (id: number) => {
    // console.log({ id });
    const newUser = users.find(({ id: userId }) => id === userId);
    // const newUser = users.find((user) => id === user.id);

    if (newUser) {
      setSelectedUser(newUser);
    }
  };

  const [bookmarksId, setBookmarksId] = useState<number[]>([]);
  console.log({ bookmarksId });

  const addBookmark = (id: number) => {
    console.log("addBookmark");
    const hasId = bookmarksId.find((currentId) => currentId === id);
    if (hasId) {
      return;
    }
    const newBookmarksId = [...bookmarksId, id];
    setBookmarksId(newBookmarksId);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarksId));
  };

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");

    if (savedBookmarks) {
      setBookmarksId(JSON.parse(savedBookmarks));
    }

    return () => {};
  }, []);

  const removeBookmark = (id: number) => {
    console.log("removeBookmark");
    const filteredBookmarks = bookmarksId.filter(
      (currentId) => currentId !== id
    );
    setBookmarksId(filteredBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks));
  };

  return (
    <div className="App">
      {/* <div>
        {count1} {count2} {count3}
        <br />
        <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
        <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
      </div> */}
      <main>
        {/* <h3 className={"h3"}>Selected User</h3>
        <UserCard {...selectedUser} />
        <Filter sortSettings={sortSettings} onClick={handlerSorting} /> */}
        {filteredUsers?.length ? (
          <>
            {/* <InputSearch
              value={searchValue}
              onChangeHandler={onChangeHandler}
              onClick={onClick}
            /> */}
            <h3 className={"h3"}>Users</h3>
            <UserList
              users={filteredUsers}
              title={"Tile new"}
              onClickUser={onClickUser}
              addBookmark={addBookmark}
              removeBookmark={removeBookmark}
              bookmarksId={bookmarksId}
            />
          </>
        ) : (
          <p>No user</p>
        )}
      </main>
    </div>
  );
};
