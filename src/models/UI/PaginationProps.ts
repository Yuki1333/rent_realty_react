export type PaginationProps = {
    currentPage: number;
    rowPerPage: number;
    totalPages: number;
    currentRowCount: number;
    onPageChange: (page: number) => void;
}