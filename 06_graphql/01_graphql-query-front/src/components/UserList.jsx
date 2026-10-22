import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import React from "react";

/*
내부적으로 문자열로 인식함!
실무에서는 다른 파일로 빼놓기도 함
실행할 쿼리 정의 (여러번 사용하기 위해 변수화)
*/
const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      username
    }
  }
`;

function UserList({ setSelectedUserId }) {
  // useQuery라는 훅 사용 (쿼리 실행 위한 훅)
  const { loading, error, data } = useQuery(GET_ALL_USERS); // response === { loading: boolean, error: object, data : object }
  // data === { users: [{id, username}, {}, {}, ..]}

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>유저 목록</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id} onClick={() => setSelectedUserId(user.id)}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
