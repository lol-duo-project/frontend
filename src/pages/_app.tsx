import { Header } from '@src/components/organisms/Header';
import { Footer } from '@src/components/organisms/Footer/Footer';
import '@src/styles/globals.css';
import { customQueryClient } from '@src/utils/customQueryClient';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Background } from '@src/components/atoms/Background/Background';

function App({ Component, pageProps }: AppProps) {
  const queryClient: QueryClient = customQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <Background>
          <Component {...pageProps} />
        </Background>
        <Footer />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
