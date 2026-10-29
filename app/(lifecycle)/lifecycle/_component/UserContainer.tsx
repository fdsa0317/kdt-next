// "https://jsonplaceholder.typicode.com/users"
// 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기
"use client"
import { Suspense, useEffect, useState } from "react";
import User from "./User";
import Loading from "@/components/common/Loading";

// interface User {
//     id: number;
//     name: string;
// }

// export default function UserContainer() {

//     const [name, setName] = useState<string>("")
//     const [user, setUser] = useState<User[]>([])

//     const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const datas = await response.json()
//     return datas
// }
//     useEffect(() => {
//         getUsers().then((datas) => {
//             setUser(datas)
//         })
//     }, [])

//     return (
//         <div>
//             <button className="border border-black">새로고침</button>
//             {user.map((user) => (
//                 <p key={user.id}>{user.name}</p>
//                 )
//             )}
//         </div>
//     );
// }

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export default function UsersContainer() {
    const [users, setUsers] = useState<User[]>([])
    const getDatas = async (): Promise<User[]> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const datas: User[] = await response.json()
        return datas
    }

    useEffect(() => {
        getDatas()
            .then(setUsers)
    }, [])

    const userList = users.map((user: User, i) => (
        <User key={i} user={user} />
    ))

    return (
        <Suspense fallback={<><Loading /></>}>
            <ul>{userList}</ul>
        </Suspense>
    );
}
