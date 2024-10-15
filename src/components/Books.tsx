import React, { FC } from "react";
import { useQuery } from "react-query";
import { fetchQuery } from "../services/api";
import { GET_BOOKS } from "../services/queries";

export const Books: FC = () => {
  //@ts-ignore -- ignoring
  const { isLoading, error, data } = useQuery<UsersData, Error>({
    queryKey: ["users", GET_BOOKS],
    queryFn: () => fetchQuery({ query: GET_BOOKS }),
    select: (data) => data.books,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="font-black py-2">Book List</h1>
      <ul>
        {data?.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.category}
          </li>
        ))}
      </ul>
    </div>
  );
};
