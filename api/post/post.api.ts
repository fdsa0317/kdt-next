// https://jsonplaceholder.typicode.com/posts

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok){
        throw new Error("posts fetching failed")
    }
    const posts = await response.json()
    return posts
}