/*
  AXIOS
  1. 브라우저의 Node.js에서 사용할 수 있는 HTTP 클라이언트 라이브러리
  2. Promise 기반: async/await와 함께 사용 가능
  3. 자동으로 JSON 변환 : 요청 / 응답 데이터를 자동으로 JSON으로 변환
  4. 에러 처리 : HTTP 에러 상태 코드를 자동으로 처리

  ## Fetch API와의 차이점
  - Fetch : 브라우저 내장 API (설치 필요 X) | json() 메소드로 수동 변환 필요 
  - Axios : 별도 설치 필요 O | 자동 JSON 변환
*/

import axios from "axios";

/* axios 인스턴스 생성 - axios.create()

  설정 옵션 
  - baseURL : 모든 요청의 기본 URL
  - headers : 모든 요청의 포함될 기본 헤더
  ...
*/

// axios 인스턴스 생성
const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

const postAPI = {
  // 전체게시글 조회용
  getAllPosts: async () => {
    // const response = await client.get('/posts');
    // console.log(response);
    const { data } = await client.get("/posts");
    return data;
  },
  // 특정 게시글 조회용
  getPostById: async (id) => {
    const { data } = await client.get(`/posts/${id}`);
    return data;
  },
  // 게시글 생성
  addPost: async (postData) => {
    const { data } = await client.post("/posts", postData);
    return data;
  },
  // 게시글 수정
  updatePost: async (id, postData) => {
    const { data } = await client.put(`/posts${id}`, postData);
    return data;
  },
  // 게시글 삭제
  deletePost: async (id) => {
    const { data } = await client.delete(`posts/${id}`);
    return data;
  },
};

export default postAPI;
