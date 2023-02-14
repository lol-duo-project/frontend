import { QueryClient } from '@tanstack/react-query';

let queryClient: undefined | QueryClient = undefined;

export const customQueryClient = () => {
  if (queryClient) return queryClient;

  return new QueryClient();
};
