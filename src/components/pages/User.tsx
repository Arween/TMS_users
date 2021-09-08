import React, { useEffect, useState } from "react";

import { users } from "./../../mock";
import { UserCard } from "../atoms/UserCard/UserCard";
import { useParams } from "react-router-dom";
import { IUser } from "../../types/index";

export const User = () => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const params = useParams() as any;
  console.log({ params });
  useEffect(() => {
    if (params?.id) {
      const foundUser = users.find(
        ({ id: userId }) => Number(userId) === params?.id
      );
      console.log({ foundUser, id: params?.id, users });
      if (foundUser) {
        setSelectedUser(foundUser);
      }
    }
    return () => {};
  }, [params?.id]);

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
        {selectedUser ? <UserCard {...selectedUser} /> : <p>No user</p>}
      </main>
    </div>
  );
};
