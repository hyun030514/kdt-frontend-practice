// 메세지 타입
export interface Message {
  username: string;
  message: string;
  timestamp: string;
  type?: 'system' | 'chat';
}

// 사용자 타입
export interface User {
  id: string; // socket에 연결된 각 클라이언트의 고유 객체 아이디
  username: string; // 사용자 닉네임
}
