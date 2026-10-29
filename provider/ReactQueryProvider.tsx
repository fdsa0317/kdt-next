"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface ReactQueryProviderProps {
    children: ReactNode
}

export default function ReactQueryProvider({children}: ReactQueryProviderProps) {

    const [queryClient] = useState(() => (
        new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 1000 * 60 * 5, // 캐싱 5분
                    refetchOnWindowFocus: false // 윈도우 포커스시 refetching false
                }
            }
        })
    ))

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}