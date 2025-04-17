import CustomInput from '@components/UI/CustomInput';
import CustomCheckbox from '@components/UI/CustomCheckbox';
import CustomSelect from '@components/UI/CustomSelect';

import { OfferFilterProps } from '@models/offers/index';

const OfferFilter: React.FC<OfferFilterProps> = ({filters, handleFilterChange, sortOptions}) =>{
    
    return (
        <div className="flex flex-wrap items-top space-x-4 my-8">
            <div>
                <CustomCheckbox
                    label="Москва"
                    id="msk" 
                    checked={Boolean(filters.cities?.includes('Москва'))}
                    onChange={() => {
                        const city = 'Москва';
                        const updatedCities = filters.cities?.includes(city)
                            ? filters.cities.filter((c) => c !== city)
                            : [...(filters.cities || []), city];
                        handleFilterChange({ cities: updatedCities });
                    }}
                />

                <CustomCheckbox
                    label="Санкт-Петербург"
                    id="spb" 
                    checked={Boolean(filters.cities?.includes('Санкт-Петербург'))}
                    onChange={() => {
                        const city = 'Санкт-Петербург';
                        const updatedCities = filters.cities?.includes(city)
                            ? filters.cities.filter((c) => c !== city)
                            : [...(filters.cities || []), city];
                        handleFilterChange({ cities: updatedCities });
                    }}
                />
            </div>
            
            <CustomInput
                label="Цена от"
                type="number"
                value={filters.priceFrom || ''}
                placeholder="0"
                onChange={(e) => handleFilterChange({ priceFrom: parseInt(e.target.value) || undefined })}
            />

            <CustomInput
                label="Цена до"
                type="number"
                value={filters.priceTo || ''}
                placeholder="1000"
                onChange={(e) => handleFilterChange({ priceTo: parseInt(e.target.value) || undefined })}
            />

            { sortOptions && <CustomSelect 
                                label="Сортировать по"
                                defaultValue="Выбрать" 
                                value={filters.sort || ''} 
                                options={sortOptions} 
                                onChange={(e) => handleFilterChange({ sort: e.target.value })}/> 
            }
            
        </div>
    )
}

export default OfferFilter;