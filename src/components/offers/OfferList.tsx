import OfferItem from '@components/offers/OfferItem';
import { Offer } from '@models/offers';

type OfferListProps = {
    offers: Offer[];
    label?: string;
};

const OfferList: React.FC<OfferListProps> = ({ label, offers }) => {
    return (
        <>
            { label && <h2 className="text-3xl font-bold text-gray-800 mb-3">{label}</h2> }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    offers.map(offer=>(
                        <OfferItem key={offer.id} offer={offer}/>
                    ))
                }
            </div>
        </>
    )
}

export default OfferList;