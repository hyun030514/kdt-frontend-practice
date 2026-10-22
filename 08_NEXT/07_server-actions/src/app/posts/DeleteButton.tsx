import { use } from 'react';
import { deletePost } from './services';

'useClient'

export default function DeleteButton({ id }: { id: string }) {

  const handleDeleteClick = async () => {
    if(confirm('게시물을 삭제하시겠습니까?')) {
      // 서버액션 함수 호출
      await deletePost(id);
      alert('성공적으로 삭제되었습니다!');
    }
  }
  return (
    <button onClick={handleDeleteClick}>[x]</button>
  );
}