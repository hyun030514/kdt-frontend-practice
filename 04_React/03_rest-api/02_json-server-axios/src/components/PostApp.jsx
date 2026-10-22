import { useEffect, useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import postAPI from "../api/postAPI";

function PostApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 선택된 게시글 데이터 관리
  const [selectedPost, setSelectedPost] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    // 게시글 목록(자원) 데이터 조회(행위, GET) 요청
    // 두번째 인자로 넘겨줘야되는데, 기본적으로 두번째 인자 안 쓰면 get 방식
    setLoading(true);

    const fetchPosts = async () => {
      try {
        const posts = await postAPI.getAllPosts();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  //   fetch('http://localhost:3000/posts')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('데이터를 불러오는데 실패했습니다.');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setPosts(data))
  //     .catch((error) => setError(error.message))
  //     // 400번 or 500번 에러는 잡지 못 함
  //     // !response.ok 로 200번대가 아닌 에러 다 잡아야됨
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    if (selectedPost) {
      setFormData({
        title: selectedPost.title,
        content: selectedPost.content,
        author: selectedPost.author,
      });
    } else {
      setFormData({
        title: "",
        content: "",
        author: "",
      });
    }
  }, [selectedPost]);

  // 핸들러는 보통 effect 아래 작성
  // 폼에 입력값 change 발생 시 실행될 이벤트 헨들러
  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // 폼에서 등록 요청시 실행될 이벤트 헨들러
  const handleRegistSubmit = async (e) => {
    e.preventDefault();
    // 게시글(자원) 데이터 생성(행위, POST) 요청
    setLoading(true);

    try {
      await postAPI.addPost(formData);
      // 게시물 목록 갱신
      // setPosts([...posts, post]);
      const newPosts = await postAPI.getAllPosts();
      setPosts(newPosts);
      // 등록 후 빈 문자열로 초기화
      setFormData({
        title: "",
        content: "",
        author: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  //   fetch('http://localhost:3000/posts', {
  //     method: 'POST', // 행위(등록)
  //     headers: {
  //       'Content-type': 'application/json',
  //     }, // 여러가지 넘겨야돼서 객체 형식으로 전달
  //     // 표현 (데이터 형식을 백엔드 쪽에 알려줘야됨 / 데이터 형식 : json)
  //     body: JSON.stringify(formData), // 본문 (전송하는 데이터)를 body에 실어서 넘겨줌 / text 형식으로 전달해야됨!!
  //   })
  //     .then((response) => response.json()) // 돌아오는게 text일테니 json으로 파싱하기
  //     .then((data) => {
  //       // 게시글 목록 갱신
  //       setPosts([...posts, data]);
  //       // 입력값 초기화
  //       setFormData({
  //         title: '',
  //         content: '',
  //         author: '',
  //       });
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setLoading(false));
  // };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // 현재 선택된 게시글 데이터(자원) 수정(PUT) 요청

    try {
      await postAPI.updatePost(selectedPost.id, formData);
      const newPosts = await postAPI.getAllPosts();
      setPosts(newPosts);
      setSelectedPost(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //   fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 게시글 목록 갱신
  //       setPosts(posts.map((post) => (post.id === data.id ? data : post)));
  //       // 선택된 게시글 null로 초기화
  //       setSelectedPost(null);
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setLoading(false));
  // };

  if (loading) return <div>Loading 중 ...</div>;
  if (error) return <div>Error : {error} </div>;

  // loading이 false고 error가 없으면 반환됨
  return (
    <>
      {/* 게시글 목록 */}
      <PostList
        posts={posts}
        setSelectedPost={setSelectedPost}
        setPosts={setPosts}
      />
      <hr />
      {/* 게시글 등록 및 수정 폼 */}
      {!selectedPost ? (
        <PostForm
          formData={formData}
          onChange={handleFormDataChange}
          onSubmit={handleRegistSubmit}
        />
      ) : (
        <PostForm
          formData={formData}
          onChange={handleFormDataChange}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </>
  );
}

export default PostApp;
