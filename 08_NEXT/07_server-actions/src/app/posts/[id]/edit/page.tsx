import { updatePostAction } from '../../actions';
import { getPostById } from '../../services';

export default async function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  return (
    <form
      action={updatePostAction.bind(null, id)}
      className="flex flex-col max-w-100 gap-4 m-4"
    >
      {/* id를 넘기는 방법 1. 고전적인 방법 - input hidden */}
      {/* <input type="hidden" name="id" defaultValue={post.id} /> */}

      <input
        type="text"
        name="title"
        placeholder="제목"
        defaultValue={post.title}
        className="border rounded border-gray-300 p-1"
        required
      />

      <textarea
        name="content"
        placeholder="내용"
        defaultValue={post.content}
        className="border rounded border-gray-300 p-1"
        required
      />

      <input
        type="text"
        name="author"
        placeholder="작성자"
        defaultValue={post.author}
        className="border rounded border-gray-300 p-1"
        required
      />

      <button type="submit" className="bg-blue-500 rounded text-white mt-2 p-2">
        수정
      </button>
    </form>
  );
}
