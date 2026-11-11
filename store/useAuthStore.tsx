import { MemberDTO } from "@/type/member/member.type";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        combine(
            {
                member: null as MemberDTO | null,
                isAuthenticated: false as boolean
            },
            (set) => ({
                setIsAuthenticated: (status: boolean) => set({isAuthenticated: status}),
                setMember: (member: MemberDTO | null) => set({member: member})
            })
        ),
        {
            name: "auth-store",
            partialize: (state) => ({
                isAuthenticated: state.isAuthenticated,
                member: state.member
            })
        }
    )
)

export default useAuthStore;