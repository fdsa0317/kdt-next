import { MemberProvider } from "@/enum/member.enum";

export interface MemberDTO {
    id: number;
    member_email: string;
    member_name?: string;
    member_age?: number;
    member_phone?: string;
    member_profile?: string;
    member_provider_id?: string;
    member_provider: MemberProvider
    member_created_at?: string;
}

export interface JoinAdditionalRequestDTO {
    memberEmail: string;
    memberPhone: string;
    memberName: string;
    memberAge: number;
    memberProvider: string;
    memberProviderId: string;
}