import React, { FC } from "react";
import { useQuery } from "react-query";
import { fetchQuery } from "../services/api";
import { GET_USERS, UsersData } from "../services/queries";
//import { useQuery } from "@apollo/client";

type Props = {};

export const Users: FC<Props> = () => {
  //@ts-ignore -- ignoring
  const { isLoading, error, data } = useQuery<UsersData, Error>({
    queryKey: ["users", GET_USERS],
    queryFn: () => fetchQuery({ query: GET_USERS }),
    //select: (data) => data.users,
  });

  /*  same example using "@apollo/client to fetch the data
  const { loading: isLoading, error, data } = useQuery(GET_USERS); */

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="font-black py-2">Users List</h1>
      <ul>
        {data?.users?.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
