import { RouterContext } from 'next/dist/shared/lib/router-context';
import { addDecorator } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as nextImage from 'next/image';

// NextImage hostname Issue 해결
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
});

const queryClient = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

addDecorator(Story => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
});
