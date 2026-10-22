import PreProcessingExample from '@/app/PreProcessingExample';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10">
        <header className="space-y-2 border-b border-zinc-200 pb-6">
          <p className="text-sm font-semibold text-zinc-500">데이터 전처리</p>
          <h1 className="text-3xl font-bold tracking-tight">
            크롤링 / API 응답 데이터를 시각화용 데이터로 가공하기
          </h1>
          <p className="text-sm text-zinc-600">
            Raw Data를 가지고, 프론트엔드에서 직접{' '}
            <span className="font-semibold">
              정제(Cleaning) → 변환(Transformation) → 집계(Aggregation)
            </span>
            까지 파이프라인을 구현해보는 과정
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-800">
              STEP 1. 기초 전처리
            </h2>
            <p className="mt-2 text-xs text-zinc-600">
              문자열 다듬기(trim), 콤마 제거, 단순 숫자 변환을 통해{' '}
              <span className="font-medium">타입 맞추기</span>에 집중해보기
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-800">
              STEP 2. 실전형 가공
            </h2>
            <p className="mt-2 text-xs text-zinc-600">
              결측치/이상치/단위가 섞여 있는 더미 데이터를{' '}
              <span className="font-medium">구조화된 타입</span>으로 변환해보기
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-800">
              STEP 3. 집계 & 분석
            </h2>
            <p className="mt-2 text-xs text-zinc-600">
              <code>map/filter/reduce</code>를 이용해 상승/하락 종목 수, 거래량
              합계 등{' '}
              <span className="font-medium">
                차트에 바로 넣을 수 있는 집계 데이터
              </span>{' '}
              만들어보기
            </p>
          </div>
        </section>

        <PreProcessingExample />
      </div>
    </main>
  );
}
