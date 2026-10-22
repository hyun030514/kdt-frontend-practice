'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { CreatePost, updatePost, deletePost } from './services';
import { errors } from 'undici-types';

// 액션 상태 관리 타입
export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

// 게시글 생성 액션
export async function createPostAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  const errors: Record<string, string> = {};

  // 유효성 검사
  if (!title || title.trim() === '') {
    errors.title = '제목을 입력해주세요.';
  }

  if (!content || content.trim() === '') {
    errors.content = '내용을 입력해주세요.';
  }

  if (!author || author.trim() === '') {
    errors.author = '작성자를 입력해주세요.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: '입력값을 확인해주세요.',
      errors,
    };
  }

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // 백엔드 API 요청
  await CreatePost(payload);

  // 목록 페이지 갱신
  revalidatePath('/posts');

  return {
    success: true,
    message: '게시글이 등록되었습니다.',
  };
}

// 게시글 수정 액션
export async function updatePostAction(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 유효성 검사
  if (title.length > 10) {
    errors.title = '제목은 10자 이하로 입력해주세요.';
  }
  if (content.length > 100) {
    errors.content = '내용은 100자 이하로 입력해주세요.';
  }
  if (!author) {
    errors.author = '작성자는 필수로 입력해주세요.';
  }

  // 유효성 검사 시 에러가 하나라도 존재하면 리턴
  // Object.keys() : 특정 객체의 키들만 배열로 반환하는 함수
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: '유효성 검사 실패',
      errors,
    };
  }

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // 백엔드 API 요청
  await updatePost(id, payload);

  // 후속 작업
  revalidatePath('/posts');
  revalidatePath(`/posts/${id}`);

// 반환 타입이 존재하기에 타입 맞추기 용으로 사용

}

// 게시글 삭제 액션
export async function deletePostAction(id: string) {
  await deletePost(id);

  revalidatePath('/posts');

  redirect('/posts');
}
