import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <nav className="p-6 border-b border-vampire-gray">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-vampire-blood">
            My Portfolio
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-vampire-blood">Home</Link>
            <Link href="/blog" className="hover:text-vampire-blood">Blog</Link>
            <Link href="/projects" className="hover:text-vampire-blood">Projects</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6">{children}</main>
      <footer className="p-6 border-t border-vampire-gray text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-vampire-blood">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-vampire-blood">
            Twitter
          </a>
          <a href="https://play.google.com/store/apps/dev?id=yourid" target="_blank" rel="noopener noreferrer" className="hover:text-vampire-blood">
            PlayStore
          </a>
          <a href="https://yourusername.itch.io" target="_blank" rel="noopener noreferrer" className="hover:text-vampire-blood">
            itch.io
          </a>
        </div>
      </footer>
    </div>
  );
}