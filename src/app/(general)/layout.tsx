import { Footer, Navbar } from '@/components';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
        <div className='container mx-auto px-5'>
          <Suspense>
            {children}
          </Suspense>
        </div>
      <Footer />
    </>
  );
}
