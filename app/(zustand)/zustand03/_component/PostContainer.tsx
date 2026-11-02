import { getPosts, Post } from "@/api/post/post.api";
import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import usePostStore from "@/store/usePostStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function PostContainer() {

    const [value, setValue] = useState<number>(0)
    const {post, setPost, posts, setPosts} = usePostStore()

    const {data: fetchPosts, isError, isLoading, refetch} = useQuery<Post[] | null>({
        queryFn: getPosts,
        queryKey: ["poste"]
    })

    useEffect(() => {
        if(fetchPosts){
            setPosts(fetchPosts)
        }
    }, [posts, setPosts])

    const handleSelectedIdClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // early return
        if(!value) {
            alert("검색할 ID를 입력하세요.")
            return;
        }
        setPost(fetchPosts?.find((post) => post.id === value))
    }
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
    }

    const handleRefetchClick = () => refetch()
    if(isLoading) return <Loading />
    if(isError) return <ErrorComponent />

    // 1. zustand 1개 게시글
    // 2. 게시글을 추가하는 setter 필요
    // 3. 밑에서 데이터를 출력
    
    return (
        <>
            <div>
                <input onChange={handleValueChange} placeholder="검색할 게시글 번호를 입력하세요" />
                <button onClick={handleSelectedIdClick}>검색</button>
            </div>
            <button onClick={handleRefetchClick}>새로 고침</button>
            {!post ? (
                <p>게시글을 검색해주세요.</p>
            ) : (
                <div>
                    <p>선택한 번호 {post?.id}</p>
                    <p>게시글 제목 {post?.title}</p>
                    <p>게시글 내용 {post?.body}</p>
                </div>
            )}
        </>
    );
}