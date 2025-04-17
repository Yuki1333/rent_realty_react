import { NavLink } from 'react-router-dom';
import { formatPrice, formatDate } from '@utils/helper_func';

import { Offer } from '@models/offers/index';

type OfferItemProps = {
    offer: Offer;
}

const OfferItem: React.FC<OfferItemProps> = ({ offer }) => {
    return (
        <>
            <div className="flex flex-row bg-white rounded-lg shadow-md overflow-hidden" data-id={offer.id}>
                <div className="h-auto w-120 bg-blue-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-blue-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{offer.address}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{formatPrice(offer.price)}</p>
                    <ul className="space-y-2 mb-4">
                        <li className="text-sm">Свободна с: {formatDate(offer.available_from)}</li>
                    </ul>
                    <NavLink to={`offer/${offer.alias}`} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Подробнее
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default OfferItem;