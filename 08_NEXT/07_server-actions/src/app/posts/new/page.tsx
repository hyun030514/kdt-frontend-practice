'use client';

import { useActionState } from 'react';
import { createPostAction } from '../actions';
import CreateButton from './CreateButton';

export default function PostCreatePage() {
  // ServerAction의 결과를 React state처럼 받아서 UI에 바로 뿌리는 도구
  const [state, formAction] = useActionState(createPostAction, {
    success: false,
    message: '',
    errors: {},
  });

  return (
    <form action={formAction} className="flex flex-col max-w-100 gap-4 m-4">
      {!state.success && state.message && (
        <div className="bg-red-100 text-red-500 rounded p-2">
          {state.message}
        </div>
      )}

      {state.success && state.message && (
        <div className="bg-green-100 text-green-500 rounded p-2">
          {state.message}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="border rounded border-gray-300 p-1"
        />
        {state.errors?.title && (
          <p className="text-red-500 text-sm">{state.errors.title}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          name="content"
          placeholder="내용"
          className="border rounded border-gray-300 p-1"
        />
        {state.errors?.content && (
          <p className="text-red-500 text-sm">{state.errors.content}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="author"
          placeholder="작성자"
          className="border rounded border-gray-300 p-1"
        />
        {state.errors?.author && (
          <p className="text-red-500 text-sm">{state.errors.author}</p>
        )}
      </div>

      <CreateButton />
    </form>
  );
}
