// https://jsonplaceholder.typicode.com/users
// 유저 데이터 전체를 fetching하여 유저의 이름만 화면에 목록으로 출력
"use client"

import { getUsers, User } from "@/api/user/user.api";
import { useQuery } from "@tanstack/react-query";

export default function UserContainer() {

    const {data: users, isLoading, error} = useQuery<User[]>({
        queryFn: getUsers,
        queryKey: ["users"]
    })

    const userNameList = users?.map(({id, name}) => (
        <li key={id}>{name}</li>
    ))

    return (
        <>
            <ul>{userNameList}</ul>
        </>
    );
}