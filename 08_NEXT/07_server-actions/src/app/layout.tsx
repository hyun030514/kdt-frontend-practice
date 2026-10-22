import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <nav>
          <Link href="/">홈</Link> | <Link href="/posts">게시글</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
