import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Client, cacheExchange, fetchExchange, Provider } from 'urql';

const client = new Client({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
  exchanges: [cacheExchange, fetchExchange]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
