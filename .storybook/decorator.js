import { QueryClientProvider } from '@tanstack/react-query';
const queryClient = customQueryClient();

export const decoraters = [
  Story => {
    return (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    );
  },
];
