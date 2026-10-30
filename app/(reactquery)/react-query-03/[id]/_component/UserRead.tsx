"use client"

import { getUser, User } from "@/api/user/user.api";
import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";

interface UserReadPros {
    id: string;
}

const initialData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3744",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

export default function UserRead({id}: UserReadPros) {

    const {data: user, isLoading, error} = useQuery<User>({
        queryFn: () => getUser(id),
        queryKey: ["user", id],
        enabled: !!Number(id), // 조건식
        retry: 3,
        // initialData: initialData
    })
    console.log("user", user)

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />


    return (
        <>
            <p>이름: {user?.name}</p>
            <p>주소: {user?.company.name}</p>
        </>
    );
}