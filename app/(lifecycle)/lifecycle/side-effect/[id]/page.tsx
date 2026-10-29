// ※권장하지 않음
interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {

    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, )
    const post = await response.json()

    return (
        <>
            <p>{post.id}</p>
            <p>{post.title}</p>
        </>
    );
}