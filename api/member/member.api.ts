import { ApiResponseDTO } from "@/type/common/common.type"
import { JoinAdditionalRequestDTO } from "@/type/member/member.type"

export const joinAdiitionalApi = async (joinDto: JoinAdditionalRequestDTO): Promise<ApiResponseDTO> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/join`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(joinDto)
    })

    if(!response.ok) throw new Error("")
    const datas = await response.json()
    return datas
}