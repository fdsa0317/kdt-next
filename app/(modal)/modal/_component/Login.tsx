"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormValues {
    email: string;
    password: string;
    passwordConfirm: string;
    hobbies: string[];
}

// 회원가입
export default function Login() {

    const {
        register, handleSubmit, getValues, 
        formState: {
            isSubmitting, isSubmitted, errors
        }
    } = useForm<FormValues>({mode: "onChange"})
    const router = useRouter()

    const onSubmit = async (formValues: FormValues) => {
        console.log("formValues", formValues)
        // 데이터 통신 (fetch) - react-query
        
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 m-4"
        >
            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >이메일</p>
                <input 
                    type="text"
                    className="border rounded-lg w-50 p-2"
                    placeholder="이메일을 입력하세요."
                    {...register("email", {
                        required: true, 
                        pattern: {
                            value: emailRegex,
                            message: "이메일 양식에 맞게 입력해주세요."
                        }
                    })}
                />
                {errors?.email?.type === "required" && (
                    <p className="text-red-500 text-[12px]">이메일을 입력하세요.</p>
                )}
                {errors?.email?.type === "pattern" && (
                    <p className="text-red-500 text-[12px]">이메일 양식에 맞게 입력해주세요.</p>
                )}
            </label>
            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >비밀번호</p>
                <input 
                    type="password"
                    className="border rounded-lg w-50 p-2"
                    placeholder="비밀번호를 입력하세요."
                    {...register("password", {
                        required: true,
                        pattern: {
                            value: passwordRegex,
                            message: "올바른 비밀번호를 입력하세요."
                        }
                    })}
                />
                {errors?.password?.type === "required" && (
                    <p className="text-red-500 text-[12px]">비밀번호를 입력하세요.</p>
                )}
                {errors?.password?.type === "pattern" && (
                    <p className="text-red-500 text-[12px]">소문자, 숫자, 특수문자(!@#)를 각 하나 포함한 8자리 이상이어야 합니다.</p>
                )}
            </label>
            <div>
                <button 
                    type="button"
                    onClick={() => router.push("/modal/login/search-email")}
                >이메일 찾기</button>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-50 h-10 bg-purple-500 text-white rounded-2xl mt-5 cursor-pointer"
            >{isSubmitting ? "제출 중" : "로그인"}</button>
        </form>
    );
}