import { FileFolder } from "@/enum/file.enum"
import { ApiResponseDTO } from "@/type/common/common.type"
import { JoinAdditionalRequestDTO, ProfileUpdateRequestDTO } from "@/type/member/member.type"

export const joinAdditionalApi = async (joinDto: JoinAdditionalRequestDTO): Promise<ApiResponseDTO> => {
    console.log("joinAdditionalApi joinDto", joinDto)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/join`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(joinDto)
    })

    if(!response.ok) throw new Error("")
    const datas: ApiResponseDTO = await response.json()
    return datas
}

export const updateProfileApi = async (fileDto: ProfileUpdateRequestDTO): Promise<ApiResponseDTO> => {
    const formData = new FormData()
    formData.append("file", fileDto.file)
    formData.append("folder", FileFolder.PROFILE)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/${fileDto.id}/profile`, {
        method: "PUT",
        body: formData
    })

    if(!response.ok){
        throw new Error("프로필 변경에 실패하였습니다.")
    }

    const result = await response.json()
    return result
}