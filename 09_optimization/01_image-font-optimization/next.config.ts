import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // next/image image 최적화 작업 시 => 외부 이미지일 경우 => 도메인 허용
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80],
  },
};

export default nextConfig;
