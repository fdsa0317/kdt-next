import { Post } from "@/api/post/post.api";
import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

const usePostStore = create(
    persist(
        combine(
            {
                post: null as null | Post,
                posts: null as null | Post[],
                selectedId: null as null | number
            },
            (set, get) => ({
                setPost:(post: Post | undefined) => set({post: post}),
                setPosts: (posts: Post[] | null) => set({posts: posts})
            })
        ),
        {
            name: "posts-storage"
        }
    )
)

export default usePostStore