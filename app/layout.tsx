import { Navbar } from '@/components';
import '@/styles/globals.css';

export default function RootLayout({
  children,
  lang,
}: Readonly<{
  children: React.ReactNode;
  lang: string;
}>) {
  return (
    <html lang={lang}>
      <body>
        <Navbar />
        <main className="px-[5vw]">{children}</main>
      </body>
    </html>
  );
}
