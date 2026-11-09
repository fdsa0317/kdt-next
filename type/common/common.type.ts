export interface ApiResponseDTO<T = any> {
    success: boolean;
    message: string;
    data: T | null;
}