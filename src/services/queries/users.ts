import { gql } from "@apollo/client";

type User = {
  id: string;
  name: string;
  email: string;
};

export type UsersData = {
  users: User[];
};

export const GET_USERS = gql`
  query GetUsers {
    users {
      name
      id
      email
    }
  }
`;
