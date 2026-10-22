import React, { useEffect, useState } from 'react';
import PostItem from '../../components/post/PostItem';
import { getPosts } from '../../services/postService';
import { useNavigate } from 'react-router-dom';

function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // 마운트 시점에만 조회하도록
  // async 쓰려면 함수 하나 선언하고 써야댐
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await getPosts();
      setPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>게시글목록</h2>
      <button onClick={() => navigate('/posts/new')}>게시글 등록</button>

      {loading ? (
        <div>로딩중...</div>
      ) : (
        posts.map((post) => <PostItem key={post.id} post={post} mode="list" />)
      )}
    </div>
  );
}

export default PostListPage;
