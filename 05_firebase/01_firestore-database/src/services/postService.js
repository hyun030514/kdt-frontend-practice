// 게시글 CRUD
/*
  posts [
    {
      title : 'xxx',
      content : 'xxxx',
      createdAt : Timestamp
    },
    ......
  ]
*/

import { db } from '../firebase/config.js';
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

// 현재 서비스의 컬렉션명을 상수화
const COLLECTION_NAME = 'posts';

// 각 기능별 함수 정의

/**
 * 신규 게시글을 등록하는 함수
 * @param {Object} postData - 등록할 게시글 데이터 {title, content}
 * @returns {string} 생성된 게시글 고유 ID
 */
//postData만 쓰면 title, content만 넘어감!! 그래서 전개구문 써야댐
const createPost = async (postData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...postData,
      createdAt: serverTimestamp(),
    });
    console.log('게시글이 생성되었습니다. ID : ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.log('게시글 등록 오류');
    throw error;
    // 다시 에러 발생시키는 구문
  }
};

/**
 * 전체 게시글 목록을 조회하는 함수
 * @returns {Array} 조회된 게시글 배열 (각 게시글 객체에 ID 포함해서 리턴)
 */
const getPosts = async () => {
  try {
    // const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));

    // 쿼리 생성
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc'),
    );

    // 쿼리 조회
    const querySnapshot = await getDocs(q);

    // 조회 결과 가공
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.log('게시글 목록 조회 오류');
    throw error;
  }
};

/**
 * 특정 게시글 조회하는 함수
 * @param {string} postId - 조회할 게시글 고유 ID
 * @returns {null || Object} 게시글 객체(ID 포함) 또는 null
 */
// 게시글 상세 조회
const getPost = async (postId) => {
  try {
    const docSnapshot = await getDoc(doc(db, COLLECTION_NAME, postId));
    if (!docSnapshot.exists()) {
      return null;
    }
    return {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };
  } catch (error) {
    console.log('게시글 조회 오류');
    throw error;
  }
};

/**
 * 특정 게시글 수정하는 함수
 * @param {string} postId - 수정할 게시글 고유 ID
 * @param {object} postData  - 수정할 게시글 데이터 {title, content}
 */
const updatePost = async (postId, postData) => {
  try {
    await updateDoc(doc(db, COLLECTION_NAME, postId), {
      ...postData,
    });
    console.log('게시글이 수정되었습니다.');
  } catch (error) {
    console.log('게시글 수정 오류');
    throw error;
  }
};

/**
 * 특정 게시글을 삭제하는 함수
 * @param {string} postId - 삭제할 게시글 고유 ID
 */
const deletePost = async (postId) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, postId));
    console.log('게시글이 삭제되었습니다.');
  } catch (error) {
    console.log('게시글 삭제 오류');
    throw error;
  }
};

export { createPost, getPosts, getPost, updatePost, deletePost };

// 테스트 실행

// createPost({
//   title: '게시글1',
//   content: '내용1',
// });
// createPost({
//   title: '게시글2',
//   content: '내용2',
// });

// console.log(getPosts());
// Promise 객체 반환됐는데 pending 상태
// -> 코드에서 getPosts 함수 호출하고 있는데 getPosts는 비동기 요청 보내고 있음
//    서버에 요청 보내고 있는데 작업 언제 끝날지 모르는데 처음 동작되고 안 끝난 상태(데이터 응답 안된 상태)인데 console 찍어서 pendig 상태!!!
//    그래서 받으려면 비동기로 해야됨!!
// console.log(await getPosts());

// console.log(await getPost('7k7KEdRwUEVqVuLr05NZ'));

// 게시글 수정 테스트
// updatePost('5F35MNQGtCTL5J4g97l4', {
//   title: '수정',
//   content: '수정된 내용',
// });

//게시글 삭제 테스트
// deletePost('5F35MNQGtCTL5J4g97l4');
