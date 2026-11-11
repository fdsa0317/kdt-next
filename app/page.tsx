import AuthHydration from "@/components/auth/AuthHydration";
import Link from "next/link";

export default function Home() {
    return (
    // React.Fragment: DOM 트리를 하나로 만들기 위한 태그 
        <>
            <AuthHydration />
            <p>Hello, World!😎</p>
            <Link
                className="flex justify-center items-center w-50 h-10 bg-purple-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer"
                href={"/login"}
            >로그인</Link>
            <Link
                className="flex justify-center items-center w-50 h-10 bg-purple-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer"
                href={"/join"}
            >회원가입</Link>
            <Link
                className="flex justify-center items-center w-50 h-10 bg-blue-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer"
                href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`}
            >구글 로그인</Link>
            <Link
                className="flex justify-center items-center w-50 h-10 bg-blue-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer"
                href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/kakao`}
            >카카오 로그인</Link>
            <Link
                className="flex justify-center items-center w-50 h-10 bg-blue-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer"
                href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/naver`}
            >네이버 로그인</Link>
            <Link
                className="flex justify-center items-center w-50 h-10 bg-purple-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer"
                href={"/my-page"}
            >마이페이지</Link>
        </>
    );
}
