import type { AppProps } from 'next/app';
import { Client, cacheExchange, fetchExchange, Provider } from 'urql';
import '../src/mocks/worker';

const client = new Client({
  url: 'https://beta.pokeapi.co/graphql/v1beta',
  exchanges: [cacheExchange, fetchExchange]
});

const MockServer = () => import('../src/mocks/worker');
MockServer();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
