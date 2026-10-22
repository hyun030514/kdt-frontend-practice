'use client';

import { useFormStatus } from 'react-dom';

export default function CreateButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 rounded text-white mt-2 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? '등록 중...' : '등록'}
    </button>
  );
}
