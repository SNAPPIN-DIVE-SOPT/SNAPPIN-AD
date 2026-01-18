import localFont from 'next/font/local';
import { Providers } from '@/src/app/providers';
import '@/src/styles/global.css';

const suit = localFont({
  src: '../../public/fonts/SUIT-Variable.woff2',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={suit.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
