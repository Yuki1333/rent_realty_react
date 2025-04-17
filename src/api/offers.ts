import { api } from '@api/index';

import { buildQueryParams } from '@utils/helper_func';

import { Offer } from '@models/offers';
import { FilterProps } from '@models/offers';


export const getOffersList = async (page: number, limit = 12, filters?: FilterProps) => {

    const queryParams = filters ? buildQueryParams(filters) : '';
    const response = await api.get(`/properties?page=${page}&limit=${limit}&${queryParams}`);

    return {
        offers: response.data.data as Offer[],
        total: response.data.total,
        page: response.data.page,
        limit: response.data.limit,
    }

}


export const getOfferDetails = async (alias: string) => {

    const response = await api.get(`/properties/${alias}`);
    return response.data;
    
}