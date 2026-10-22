import { Message } from '../types';

interface ChatRoomMessageListProps {
  messages: Message[];
  typingUser: string; // 추가
  currentUsername: string; // 추가
}

export default function ChatRoomMessageList({
  messages,
  typingUser,
  currentUsername,
}: ChatRoomMessageListProps) {
  return (
    <>
      {/* 메세지 목록 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => {
          // 시스템 메세지일 경우
          if (msg.type === 'system') {
            return (
              <div key={idx} className="flex justify-center">
                <div className="bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full">
                  {msg.message}
                </div>
              </div>
            );
          }

          // 일반 채팅 메세지일 경우
          if (msg.type === 'chat') {
            const isMyMessage = msg.username === currentUsername;
            return (
              <div
                key={idx}
                className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs flex flex-col ${isMyMessage ? 'items-end' : 'items-start'}`}
                >
                  {!isMyMessage && (
                    <span className="text-xs font-semibold text-gray-700 mb-1">
                      {msg.username}
                    </span>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg 
                      ${
                        isMyMessage
                          ? 'bg-blue-500 text-white'
                          : 'bg-white border border-gray-200'
                      }`}
                  >
                    <p className="break-words">{msg.message}</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">
                    {/* 오후 05:30 형식으로 시간 표시 */}
                    {new Date(msg.timestamp).toLocaleTimeString('ko-KR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* 타이핑 중 표시 */}
      {typingUser && (
        <div className="px-4 py-2 text-sm text-gray-500">
          {typingUser}님이 입력 중입니다...
        </div>
      )}
    </>
  );
}
