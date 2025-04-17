import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { buildQueryParams, parseQueryParams } from '@utils/helper_func';

import BannersList from '@components/banners/BannersList';
import OfferFilter from '@components/offers/OfferFilter';
import OfferList from '@components/offers/OfferList';
import Pagination from '@components/Pagination';

import { FilterProps } from '@models/offers';

import { useDebouncedValue } from '@hooks/useDebouncedValue';
import { useOffers } from '@hooks/useOffers';

const Home = () => {

    const location = useLocation();

    const [filtersSortOptions, setFiltersSortOptions] = useState([
        { value: 'price_asc', label:'По возрастанию цены' },
        { value: 'price_desc', label:'По убыванию цены' },
        { value: 'date_new', label:'Новые' },
        { value: 'date_old', label:'Старые' }
    ]);

    const [filters, setFilters] = useState<FilterProps>(() => parseQueryParams(location.search));
    const debouncedFilters = useDebouncedValue(filters, 3000);

    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(6);


    const handleFilterChange = (updated: Partial<FilterProps>) => {

        if (!filters) return;

        const newFilters = {
          ...filters,
          ...updated,
        };
    
        setFilters(newFilters);
    
        const query = buildQueryParams(newFilters);
        setSearchParams(query);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    //выгружаем Новые предложения
    const { offersList, totalPages, loading, error } = useOffers(currentPage, rowPerPage, debouncedFilters);

    return (
        <>
            <p>{JSON.stringify(filters)}</p>
            <BannersList />
            <OfferFilter sortOptions={filtersSortOptions} filters={filters} handleFilterChange={handleFilterChange} />
            {
            offersList.length !== 0
            ? <>
                <OfferList label="Новые предложения" offers={offersList} />
                <Pagination currentPage={currentPage} rowPerPage={rowPerPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </>
            : <p>List is empty</p>
            }
        </>
    )
}
export default Home;