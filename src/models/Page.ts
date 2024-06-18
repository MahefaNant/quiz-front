export interface Pageable {
    page: number;
    size: number;
    sort?: string;
}

export interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}