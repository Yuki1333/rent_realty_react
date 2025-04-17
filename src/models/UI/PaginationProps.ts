export type PaginationProps = {
    currentPage: number;
    rowPerPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}