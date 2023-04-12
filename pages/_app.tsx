import type { AppProps } from 'next/app';

if (typeof window !== 'undefined') {
  const { worker } = require('@/src/mocks/browser');
  worker.start();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
