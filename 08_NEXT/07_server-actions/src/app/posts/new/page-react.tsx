'use client';

import { useState } from 'react';
import { CreatePostDto } from '../types';
import { CreatePost } from '../services';
import { useRouter } from 'next/navigation';

// 기존 react 방식
export default function PostCreatePage() {
  const router = useRouter();

  const [formdata, setFormData] = useState<CreatePostDto>({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await CreatePost(formdata);
    alert('게시글이 성공적으로 등록되었습니다.');
    setFormData({ title: '', content: '', author: '' });
    router.push('/posts');
    //게시글 목록 상태 변수에 push 해줌
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-100 gap-4 m-4">
      <input
        type="text"
        name="title"
        placeholder="제목"
        className="border rounded border-gray-300 p-1"
        value={formdata.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="내용"
        className="border rounded border-gray-300 p-1"
        value={formdata.content}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="작성자"
        className="border rounded border-gray-300 p-1"
        value={formdata.author}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 rounded text-white mt-2 p-2">
        등록
      </button>
    </form>
  );
}
