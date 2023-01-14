import { expect, test } from "vitest";
import { render, renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";

const queryClient = new QueryClient({
     defaultOptions: {
          queries: {
               staleTime: Infinity,
               cacheTime: Infinity,
               retry: false,
          },
     },
});

function getBreedList(animal) {
     let list;

     function TestComponent() {
          list = useBreedList(animal);
          return null;
     }

     render(
          <QueryClientProvider client={queryClient}>
               <TestComponent />
          </QueryClientProvider>
     );

     return list;
}

test("gives an empty list with no animal", async () => {
     const [breedList, status] = getBreedList();
     expect(breedList).toHaveLength(0);
     expect(status).toBe("loading");
});

test("gives an empty list", async () => {
     const { result } = renderHook(() => useBreedList(""), {
          wrapper: ({ children }) => (
               <QueryClientProvider client={queryClient}>
                    {children}
               </QueryClientProvider>
          ),
     });
     const [breedList, status] = result.current;
     expect(breedList).toHaveLength(0);
     expect(status).toBe("loading");
});
