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
      <body
      // className="dark"
      >
        <Navbar />
        <main className="px-[5vw] py-8 bg-primary-light dark:bg-primary-dark">
          {children}
        </main>
      </body>
    </html>
  );
}
