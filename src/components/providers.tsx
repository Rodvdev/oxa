"use client";

import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </SessionProvider>
  );
} 