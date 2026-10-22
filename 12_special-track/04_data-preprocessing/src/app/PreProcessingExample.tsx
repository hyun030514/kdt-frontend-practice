import { RAW_STOCKS } from '@/data/rawStocks';
import { analyzeStock } from '@/utils/stockAnalysis';
import { processStockPipeline } from '@/utils/stockProcessor';

export default function PreProcessingExample() {
  const processedStocks = processStockPipeline(RAW_STOCKS);
  const summary = analyzeStock(processedStocks);
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-zinc-800">
          더미 데이터 전처리 파이프라인
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-zinc-800">
              Raw Data (수집 직후)
            </h3>
            <p className="mt-1 text-[11px] text-zinc-500">
              /src/data/rawStocks.ts
            </p>
          </div>
          <div className="flex-1">
            <pre className="max-h-56 overflow-auto rounded-lg bg-zinc-900 px-3 py-2 text-[11px] leading-relaxed text-zinc-100">
              {JSON.stringify(RAW_STOCKS, null, 2)}
            </pre>
          </div>
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-zinc-800">
              전처리 파이프라인 처리 결과
            </h3>
            <p className="mt-1 text-[11px] text-zinc-500">
              정제 + 변환 + 중복 제거
            </p>
          </div>
          <div className="flex-1">
            <pre className="max-h-56 overflow-auto rounded-lg bg-zinc-900 px-3 py-2 text-[11px] leading-relaxed text-zinc-100">
              {JSON.stringify(processedStocks, null, 2)}
            </pre>
          </div>
        </div>

        <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-zinc-800">
              Aggregated Data (집계 결과)
            </h3>
            <p className="mt-1 text-[11px] text-zinc-500">
              중복 제거 + 집계 파이프라인
            </p>
          </div>
          <div className="flex-1">
            <dl className="space-y-1 text-sm text-zinc-700">
              <div className="flex justify-between">
                <dt>상승 종목 수</dt>
                <dd className="font-semibold text-emerald-600">
                  {summary.risingCount}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>하락/보합 종목 수</dt>
                <dd className="font-semibold text-rose-600">
                  {summary.fallingCount}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>전체 거래량 합계</dt>
                <dd className="font-semibold">
                  {summary.totalVolume.toLocaleString()}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
