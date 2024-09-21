export interface ReviewDTORequest {
    rating?: number;
    comment?: string;
    date?: Date;
    idUser?: number;
    idTheme?: number;
}