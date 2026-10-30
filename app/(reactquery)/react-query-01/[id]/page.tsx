export const instans = false

import Loading from "@/components/common/Loading";
import TodoRead from "./_component/TodoRead";
import { Suspense } from "react";

interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {

    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, )
    
    if(!response){
        throw new Error("Fetching failed")
    }

    const todo = await response.json()

    return (
        <Suspense fallback={<Loading />}>
            <TodoRead id={id} />            
        </Suspense>
    );
}
