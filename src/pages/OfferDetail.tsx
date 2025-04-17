import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getOfferDetails } from "@api/offers";

import { Offer } from '@models/offers';


const OfferDetail = () => {

    const navigate = useNavigate();

    const { alias } = useParams<{ alias: string }>();
    const [offer, setOffer] = useState<Offer | null>(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        if (alias) {
            const fetchOffer = async () => {
                setIsLoading(true);
                setIsError(false);
                try {
                    const result = await getOfferDetails(alias);
                    if(result){
                        setOffer(result);
                    }else{
                        throw new Error("Ошибка получения данных по предложению");
                    }
                } catch (error) {
                    setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchOffer();
        }
    }, [alias]);


    useEffect(() => {
        if (isError) {
            navigate('/404');
        }
    }, [isError, navigate]);


    if (isLoading) {
        return <div className='text-center'>Загрузка...</div>;
    }

    if (!offer) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{offer.title}</h1>
                <p className="text-sm text-gray-500">{offer.address}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img src="https://placehold.co/600x400" alt="Фото виллы 1" className="w-full h-64 object-cover rounded-lg" />
                <img src="https://placehold.co/600x400" alt="Фото виллы 2" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    {offer.description ? (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Описание</h2>
                            <p className="text-gray-700 mb-4">
                                Полностью отремонтированный и очень чистый дом с 4 спальнями и 2 ванными комнатами для вашего отдыха. Дом оснащён новой мебелью высокого класса и бытовой техникой из нержавеющей стали. Включает большую отапливаемую бассейн, летнюю кухню с грилем и просторный задний двор для развлечений.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Спальни: 4</li>
                                <li>Ванные комнаты: 2</li>
                                <li>Кровати: 6</li>
                                <li>Максимальное количество гостей: 8 взрослых и 4 детей</li>
                                <li>Площадь: 1600 кв. футов</li>
                                <li>Парковка: 3 места</li>
                                <li>Минимальный срок аренды: 4 дня</li>
                            </ul>
                        </>
                    ) : ''}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Удобства</h2>
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                            <div className="flex items-center">Wi-Fi</div>
                            <div className="flex items-center">
                                Бассейн
                            </div>
                            <div className="flex items-center">
                                Кондиционер
                            </div>
                            <div className="flex items-center">
                                Телевизор
                            </div>
                            <div className="flex items-center">
                                Парковка
                            </div>
                            <div className="flex items-center">
                                Кухня
                            </div>
                            <div className="flex items-center">
                                Стиральная машина
                            </div>
                            <div className="flex items-center">
                                Разрешены с питомцами
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Правила дома</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Заезд после 16:00</li>
                                <li>Выезд до 12:00</li>
                                <li>Минимальный возраст основного арендатора: 28 лет</li>
                                <li>Курение запрещено</li>
                                <li>Разрешено проживание с небольшими питомцами</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Цены и доступность</h2>
                            <p className="text-gray-700 mb-2">Цена за ночь: <span className="font-bold">$299</span></p>
                            <p className="text-gray-700 mb-2">Уборка: <span className="font-bold">$380</span></p>
                            <p className="text-gray-700 mb-2">Плата за питомца: <span className="font-bold">$1,000</span></p>
                            <p className="text-gray-700 mb-2">Административный сбор: <span className="font-bold">$150</span></p>
                            <p className="text-gray-700"><small>* Налоги и сборы оплачиваются дополнительно</small></p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Забронировать</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Дата заезда</label>
                            <input type="date" id="checkin" className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Дата выезда</label>
                            <input type="date" id="checkout" className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Гости</label>
                            <input type="number" id="guests" className="w-full border border-gray-300 rounded-md p-2" placeholder="Введите количество гостей" />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200">
                                Забронировать сейчас
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default OfferDetail;