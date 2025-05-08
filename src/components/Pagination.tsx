import { PaginationProps } from "@models/UI/PaginationProps";


const Pagination: React.FC<PaginationProps> = ({ currentPage, rowPerPage, totalPages, currentRowCount, onPageChange }) => {

    const showPagination = currentRowCount == (currentPage * rowPerPage);
    const showLoadMore = (currentPage * rowPerPage) < (totalPages * rowPerPage);

    return (
        <div className="flex flex-col justify-center items-center mt-8 gap-y-4">
            <nav>
                <ul className="inline-flex items-center space-x-2">
                    <li>
                        <button
                            className={`px-4 py-2 text-sm font-medium ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700'} bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                            disabled={currentPage === 1}
                            onClick={() => onPageChange(currentPage - 1)}
                        >
                            &laquo; Предыдущая
                        </button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                            <li key={page}>
                                <button
                                    className={`px-4 py-2 text-sm font-medium ${currentPage === page ? 'text-white bg-blue-600' : 'text-gray-700 bg-white'} border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                                    onClick={() => onPageChange(page)}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                    <li>
                        <button
                            className={`px-4 py-2 text-sm font-medium ${currentPage === totalPages ? 'text-gray-400' : 'text-gray-700'} bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                            disabled={currentPage === totalPages}
                            onClick={() => onPageChange(currentPage + 1)}
                        >
                            Следующая &raquo;
                        </button>
                    </li>
                </ul>
            </nav>
            { showLoadMore && <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Показать ещё ...</button> }
        </div>
    )
}

export default Pagination;