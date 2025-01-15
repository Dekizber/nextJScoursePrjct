import React from 'react';
import './globals.css';
import ActiveLabel from './components/active-label';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <ActiveLabel>Active</ActiveLabel>
    </html>
  );
}
