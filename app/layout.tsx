import { montserrat } from './ui/font';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} antialiased`}>
      <body>{children}</body>

      <footer className='py-10 flex justify-center items-center'>
        UwU
      </footer>
    </html>
  );
}
