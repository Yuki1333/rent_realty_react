import { CustomOptionItem } from "@models/UI/CustomSelectProps";

export type Offer = {
    id: number;
    title: string;
    alias: string;
    price: number;
    available_from: string;
    address: string;
    description?: string;
    rooms?: number;
    area?: number;
    floor?: number;
    total_floors?: number;
    has_furniture?:boolean;
    has_balcony?: boolean;
    metro?: string;
};

export type FilterProps = {
    cities?: string[];
    priceFrom?: number;
    priceTo?: number;
    sort?: string;
}

export type OfferFilterProps = {
    filters: FilterProps;
    handleFilterChange: (updated: Partial<FilterProps>) => void;
    sortOptions?: CustomOptionItem[];
};