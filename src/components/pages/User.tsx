import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { users } from "./../../mock";
import { UserCard } from "../atoms/UserCard/UserCard";

import { IUser } from "../../types/index";
import { Title } from "../atoms/Title";

export const User = () => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const params = useParams() as any;
  console.log({ params });

  useEffect(() => {
    if (params?.id) {
      const foundUser = users.find(
        ({ id: userId }) => userId === Number(params?.id)
      );
      // console.log({ foundUser, id: params?.id, users });
      if (foundUser) {
        setSelectedUser(foundUser);
        return;
      }
      setSelectedUser(null);
    }
    return () => {};
  }, [params?.id]);

  return (
    <div className="App">
      <main>
        <Link to="/">Home</Link>
        <Title title={"Slected user"} />
        {selectedUser ? <UserCard {...selectedUser} /> : <p>No user</p>}
      </main>
    </div>
  );
};
