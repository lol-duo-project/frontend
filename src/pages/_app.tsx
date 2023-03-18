import { Header } from '@src/components/Header';
import '@src/styles/globals.css';
import { customQueryClient } from '@src/utils/customQueryClient';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const queryClient: QueryClient = customQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
