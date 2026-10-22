import { useState } from "react";
import PostDetail from "./components/PostDetail";
import PostList from "./components/PostList";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <>
      <PostList asetSelectedPostId={setSelectedPostId} />
      {selectedPostId && (
        <>
          <PostDetail postId={selectedPostId} />
          <button>해당 게시글 삭제</button>
        </>
      )}
    </>
  );
}

export default App;
