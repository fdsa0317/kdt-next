import { create } from "zustand";
import { combine, persist } from "zustand/middleware";


const useCountStore = create(
    persist(
        combine(
            {
                count: 0
            },
            (set) => ({
                increase: () => set((state) => ({count: state.count + 1})),
                decrease: () => set((state) => ({count: state.count - 1})),
                addCount: (payload: number) => set((state) => ({count: state.count + payload})),
                subtractCount: (payload: number) => set((state) => ({count: state.count - payload}))
            })
        ),
        {
            name: "count-storage"
        }
    )
)

export default useCountStore;