'use client';

import { useRef, useState } from 'react';

interface ChatRoomMessageInputProps {
  onTyping: () => void;
  onStopTyping: () => void;
  onSendMessage: (message: string) => void;
}

export default function ChatRoomMessageInput({
  onTyping,
  onStopTyping,
  onSendMessage,
}: ChatRoomMessageInputProps) {
  const [message, setMessage] = useState('');

  // 타이핑 이벤트 처리
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);

    onTyping(); // 타이핑 이벤트 전송

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current); // 기존 타이머 제거

    // 1초 후 타이핑 중지
    typingTimeoutRef.current = setTimeout(() => {
      // 새로운 타이머 생성
      onStopTyping(); // 타이핑 중지 이벤트 전송
    }, 1000);
  };

  // 메세지 전송 이벤트 처리
  const handleSend = () => {
    if (message.trim()) {
      // 메세지가 비어있지 않은 경우
      onSendMessage(message); // 메세지 전송 이벤트 전송
      setMessage(''); // 메세지 입력 초기화

      // 타이핑 중지
      typingTimeoutRef.current && clearTimeout(typingTimeoutRef.current); // 기존 타이머 제거

      onStopTyping(); // 타이핑 중지 이벤트 전송
    }
  };

  // 엔터키 이벤트 처리
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          전송
        </button>
      </div>
    </div>
  );
}
