/*

  시장 요약 통계 계산

 */

import { ProcessedStock, StockSummary } from '@/types';

export const analyzeStock = (data: ProcessedStock[]): StockSummary => {
  let summary = {
    risingCount: 0,
    fallingCount: 0,
    totalVolume: 0,
  };

  data.forEach((item) => {
    // 1) 상승/하락 종목 수 계산
    if (item.isRising) {
      summary.risingCount++;
    } else {
      summary.fallingCount++;
    }

    // 2) 전체 거래량 합계 계산
    summary.totalVolume += item.volume;
  });

  return summary;
};

// reduce()
export const analyzeStockWithReduce = (data: ProcessedStock[]): StockSummary => {
  return data.reduce(
    (summary, item) => {
      // 1) 상승/하락 종목 수 계산
      if (item.isRising) {
        summary.risingCount++;
      } else {
        summary.fallingCount++;
      }

      // 2) 전체 거래량 합계 계산
      summary.totalVolume += item.volume;

      return summary;
    },
    {
      risingCount: 0,
      fallingCount: 0,
      totalVolume: 0,
    }
  );
};
