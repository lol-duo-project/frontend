import '@/styles/globals.css';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { customQueryClient } from '@/utils/customQueryClient';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient: QueryClient = customQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
