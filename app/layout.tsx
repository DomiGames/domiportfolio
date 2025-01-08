import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio', // Default title
  description: 'Welcome to my portfolio site!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-vampire-dark text-vampire-light">
        {children}
      </body>
    </html>
  );
}