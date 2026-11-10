"use client"

import { joinAdiitionalApi } from "@/api/member/member.api";
import { ApiResponseDTO } from "@/type/common/common.type";
import { JoinAdditionalRequestDTO } from "@/type/member/member.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";


// 회원가입
export default function JoinAdditional() {

    const searchParams = useSearchParams()
    const router = useRouter()

    const memberEmail = searchParams.get("member_email") || "";
    const memberProvider = searchParams.get("member_provider") || "";
    const memberProviderId = searchParams.get("member_provider_id") || "";

    const {
        register, handleSubmit, getValues, 
        formState: {
            isSubmitting, isSubmitted, errors
        }
    } = useForm<JoinAdditionalRequestDTO>({
        mode: "onChange",
        defaultValues: {
            memberEmail: memberEmail,
            memberProvider: memberProvider,
            memberProviderId: memberProviderId,
            memberPhone: "",
            memberName: "",
            memberAge: 0
        }
    })

    const joinMutation = useMutation({
        mutationFn: joinAdiitionalApi,
        onSuccess: (datas: ApiResponseDTO) => {
            alert("회원가입 완료. 다시 로그인 해주세요.")
            router.push("/")
            // refresh: location 기록을 삭제
            router.refresh()
        },
        onError: (error: Error) => {
            console.error(error.message)
        }
    })

    const onSubmit = async (joinDto: JoinAdditionalRequestDTO) => {
        const payload = {
            ...joinDto,
            memberAge: Number(joinDto)
        }
        joinMutation.mutate(payload)
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
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
                    className="border rounded-lg w-50 p-2 bg-gray-300 text-gray-500"
                    placeholder="이메일을 입력하세요."
                    readOnly
                    {...register("memberEmail", {
                        required: true, 
                        pattern: {
                            value: emailRegex,
                            message: "이메일 양식에 맞게 입력해주세요."
                        }
                    })}
                />
                {errors?.memberEmail?.type === "required" && (
                    <p className="text-red-500 text-[12px]">이메일을 입력하세요.</p>
                )}
                {errors?.memberEmail?.type === "pattern" && (
                    <p className="text-red-500 text-[12px]">이메일 양식에 맞게 입력해주세요.</p>
                )}
            </label>

            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >휴대폰 번호</p>
                <input 
                    type="text"
                    className="border rounded-lg w-50 p-2"
                    placeholder="01012341234"
                    {...register("memberPhone", {
                        required: true, 
                    })}
                />
                {errors?.memberPhone?.type === "required" && (
                    <p className="text-red-500 text-[12px]">휴대폰 번호를 입력하세요.</p>
                )}
            </label>
            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >이름</p>
                <input 
                    type="text"
                    className="border rounded-lg w-50 p-2"
                    placeholder="이름을 입력하세요."
                    {...register("memberName", {
                        required: true, 
                    })}
                />
            </label>
            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >나이</p>
                <input 
                    type="text"
                    className="border rounded-lg w-50 p-2"
                    placeholder="나이를 입력하세요."
                    {...register("memberAge", {
                        required: true, 
                    })}
                />
            </label>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-50 h-10 bg-purple-500 text-white rounded-2xl mt-5 cursor-pointer"
            >{isSubmitting ? "제출 중" : "회원가입"}</button>
        </form>
    );
}