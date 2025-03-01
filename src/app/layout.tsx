import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cozy Threads',
  description: 'Sport some new threads!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased my-6 font-serif`}>{children}</body>
    </html>
  );
}
