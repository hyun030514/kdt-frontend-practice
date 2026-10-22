import STT_WebSpeechAPI from './components/STT_WebSpeechAPI';
import STT_Hook from './components/STT_Hook';
import TTS_WebSpeechAPI from './components/TTS_WebSpeechAPI';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 font-sans">
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white px-6 py-8 shadow-sm">
        <header className="mb-8 space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900">
            🎙️ Voice UX: STT + TTS
          </h1>
          <p className="text-sm text-zinc-600">
            키보드 대신 목소리로 입력하고, 브라우저가 텍스트를 읽어주는 음성
            인터페이스(Voice UX)를 함께 만들어 봅시다.
          </p>
        </header>

        <h3 className="text-lg font-semibold text-zinc-900 m-5">
          STT: Speech To Text
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <STT_WebSpeechAPI />
          <STT_Hook />
        </div>

        <h3 className="text-lg font-semibold text-zinc-900 m-5">
          TTS: Text To Speech
        </h3>
        <div>
          <TTS_WebSpeechAPI />
        </div>
      </main>
    </div>
  );
}
