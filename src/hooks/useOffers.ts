import { useEffect, useState } from "react";

import { getOffersList } from "@api/offers";

import { Offer } from "@models/offers";
import { FilterProps } from "@models/offers";

export const useOffers = (currentPage: number, rowPerPage: number, filters?: FilterProps) => {
    const [offersList, setOffersList] = useState<Offer[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOffers = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await getOffersList(currentPage, rowPerPage, filters);
                if(result?.offers){
                    setOffersList(result.offers);
                    setTotalPages(Math.ceil(result.total / result.limit));
                }else{
                    throw new Error("Ошибка получения данных");
                }
            } catch (err: any) {
                setError(err.message || "Произошла ошибка при загрузке");
            } finally {
                setLoading(false);
            }
        };
        fetchOffers();
    }, [currentPage, filters]);

    return { offersList, totalPages, loading, error };
};
