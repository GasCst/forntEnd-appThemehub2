export interface PageDTO<T>{
    content?: T[];
    pageable?: PageableDTO;
    totalElements?: number;
    totalPages?: number;
    last?: boolean;
    size: number;
    number: number;
}

export interface PageableDTO{
    pageNumber?: number;
    pageSize?: number;
}