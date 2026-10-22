import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
const nextConfig: NextConfig = {
  /* config options here */
};

// 번들 분석기 설정
const bundelAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // 빌드시 ANALYZE 환경 변수가 true일 때만 번들 분석기를 활성화
  openAnalyzer: true, // 번들 분석기 활성화 된 채로 빌드 완료 => 분석 결과 페이지 브라우저로 자동 열기
});

export default bundelAnalyzer(nextConfig);
