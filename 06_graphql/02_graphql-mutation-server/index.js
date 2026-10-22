import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import express from "express";
import cors from "cors";

const users = [
  { id: "1", username: "Alice", age: 25 },
  { id: "2", username: "Bob", age: 30 },
  { id: "3", username: "Charlie", age: 35 },
];

const posts = [
  {
    id: "101",
    title: "GraphQL Intro",
    content: "GraphQL은 REST API 대신 사용하는 새로운 쿼리 언어입니다.",
    authorId: "1",
  },
  {
    id: "102",
    title: "React Hooks",
    content: "React Hooks는 React 16.8에 도입된 새로운 기능입니다.",
    authorId: "1",
  },
  {
    id: "103",
    title: "Vite vs CRA",
    content: "Vite와 CRA는 각각 다른 빌드 툴입니다.",
    authorId: "2",
  },
];

const typeDefs = `
type User {
  id: ID!
  username: String!
  age: Int
  posts: [Post]
}
type Post {
  id: ID!
  title: String!
  content: String
  author: User
}
type Query {
  users: [User]
  posts: [Post]
  user(id: ID!): User
  post(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String, authorId: ID!): Post 
    deletePost(id: ID!): Post
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    posts: () => posts,
    user: (_, { id }) => users.find((user) => user.id === id),
    post: (_, { id }) => posts.find((post) => post.id === id),
  },

  User: {
    posts: (parent) => posts.filter((post) => post.authorId === parent.id),
  },

  Post: {
    author: (parent) => users.find((user) => user.id === parent.authorId),
  },

  Mutation: {
    // args === {title: xx, content: xx, authorId: xx}
    createPost: (_, { title, content, authorId }) => {
      // 신규 게시글 생성
      const newPost = {
        // 삭제시 id 겹칠수도 있으니까 random!!
        id: String(posts.length + 101 + Math.random()),
        title,
        content: content || "(...)",
        authorId,
      };
      // DB(배열)에 게시글 추가
      posts.push(newPost);

      // 생성된 게시글 반환
      return newPost;
    },
    deletePost: (_, { id }) => {
      // find, filter(삭제 시키면 삭제된거 받을 수 없음) 사용해도 되자만 splice(삭제된거 받을 수 있음) 사용
      // DB(배열)로부터 해당 id를 가진 게시글 객체의 index 찾아서 잘라내기
      const deletedIndex = posts.findIndex((post) => post.id === id);

      // splice 활용
      // [삭제된요소객체] -> 0번째 인덱스 삭제하겠다..~
      const deletedPost = posts.splice(deletedIndex, 1)[0];

      // 삭제된 객체 반환
      return deletedPost;
    },
  },
};

// 3. Apollo Server와 Express를 초기화하고 실행하는 함수
async function startServer() {
  // 3_1) GraphQL 요청을 처리할 Apollo Server 인스턴스 생성 (typeDefs와 resolvers를 사용하여 생성)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  // 3_2) Apollo Server가 요청을 받을 준비를 마칠 때까지 대기
  await server.start();

  // 3_3) REST 엔드포인트, 미들웨어 등을 연결할 Express 앱 생성
  const app = express();
  // 3_4) /graphql 엔드포인트로 들어오는 요청에 대한 미들웨어 체인 구성
  app.use(
    "/graphql", // - /graphql 엔드포인트로 들어오는 요청에 대한 미들웨어 체인 구성
    cors(), // - 다른 도메인에서 접근할 수 있도록 CORS 허용
    express.json(), // - 요청 본문을 JSON으로 파싱
    expressMiddleware(server), // - Apollo Server와 Express를 연결 (Express 에서 GraphQL 요청을 처리할 수 있도록 연결)
  );
  // 3_5) 서버가 열릴 포트 지정 후 실행
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 GraphQL 서버가 http://localhost:${PORT}/graphql 에서 실행 중입니다.`,
    );
  });
}

// 4. 서버 실행
startServer();
