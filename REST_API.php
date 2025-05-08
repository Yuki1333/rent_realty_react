<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$result = [];

$method = $_SERVER['REQUEST_METHOD'];
$uri = explode('/', trim($_SERVER['PATH_INFO'] ?? '', '/'));
$resource = $uri[0] ?? null;
$alias = $uri[1] ?? null;
$input = json_decode(file_get_contents('php://input'), true);

// Массив квартир
$properties = [
    [
        "id" => 1,
        "title" => "1-комнатная квартира в центре",
        "alias" => "some-addr-1",
        "city" => "Москва",
        "address" => "ул. Ленина, 10, Москва",
        "price" => 55000,
        "description" => "Полностью отремонтированный и очень чистый дом с 4 спальнями и 2 ванными комнатами для вашего отдыха. Дом оснащён новой мебелью высокого класса и бытовой техникой из нержавеющей стали. Включает большую отапливаемую бассейн, летнюю кухню с грилем и просторный задний двор для развлечений.",
        "rooms" => 1,
        "area" => 38,
        "floor" => 3,
        "total_floors" => 9,
        "has_furniture" => true,
        "has_balcony" => true,
        "metro" => "Тверская",
        "available_from" => "2025-04-15"
    ],
    [
        "id" => 2,
        "title" => "2-комнатная квартира рядом с метро",
        "alias" => "some-addr-2",
        "city" => "Санкт-Петербург",
        "address" => "пр. Мира, 50, Санкт-Петербург",
        "price" => 47000,
        "description" => "",
        "rooms" => 2,
        "area" => 54,
        "floor" => 5,
        "total_floors" => 10,
        "has_furniture" => false,
        "has_balcony" => true,
        "metro" => "Площадь Восстания",
        "available_from" => "2025-04-20"
    ],
    [
        "id" => 3,
        "title" => "Уютная студия в новом доме",
        "alias" => "some-addr-3",
        "city" => "Казань",
        "address" => "ул. Академика Королёва, 7, Казань",
        "price" => 30000,
        "description" => "",
        "rooms" => 1,
        "area" => 26,
        "floor" => 9,
        "total_floors" => 16,
        "has_furniture" => true,
        "has_balcony" => false,
        "metro" => "Горки",
        "available_from" => "2025-04-12"
    ],
    [
        "id" => 4,
        "title" => "3-комнатная квартира в спальном районе",
        "alias" => "some-addr-4",
        "city" => "Екатеринбург",
        "address" => "ул. Победы, 100, Екатеринбург",
        "price" => 42000,
        "description" => "",
        "rooms" => 3,
        "area" => 72,
        "floor" => 2,
        "total_floors" => 5,
        "has_furniture" => false,
        "has_balcony" => true,
        "metro" => "Ботаническая",
        "available_from" => "2025-04-25"
    ],
    [
        "id" => 5,
        "title" => "Лофт с панорамными окнами",
        "alias" => "some-addr-5",
        "city" => "Москва",
        "address" => "ул. Бауманская, 20, Москва",
        "price" => 90000,
        "description" => "",
        "rooms" => 2,
        "area" => 65,
        "floor" => 12,
        "total_floors" => 15,
        "has_furniture" => true,
        "has_balcony" => false,
        "metro" => "Бауманская",
        "available_from" => "2025-05-01"
    ],
    [
        "id" => 6,
        "title" => "1-комнатная квартира у парка",
        "alias" => "some-addr-6",
        "city" => "Новосибирск",
        "address" => "ул. Зелёная, 15, Новосибирск",
        "price" => 28000,
        "description" => "",
        "rooms" => 1,
        "area" => 34,
        "floor" => 4,
        "total_floors" => 9,
        "has_furniture" => true,
        "has_balcony" => true,
        "metro" => "Площадь Ленина",
        "available_from" => "2025-04-18"
    ],
    [
        "id" => 7,
        "title" => "Современная квартира-студия",
        "alias" => "some-addr-7",
        "city" => "Нижний Новгород",
        "address" => "ул. Центральная, 8, Нижний Новгород",
        "price" => 32000,
        "description" => "",
        "rooms" => 1,
        "area" => 30,
        "floor" => 7,
        "total_floors" => 12,
        "has_furniture" => true,
        "has_balcony" => true,
        "metro" => "Горьковская",
        "available_from" => "2025-04-14"
    ],
    [
        "id" => 8,
        "title" => "Квартира у набережной",
        "alias" => "some-addr-8",
        "city" => "Санкт-Петербург",
        "address" => "наб. реки Фонтанки, 80, Санкт-Петербург",
        "price" => 75000,
        "description" => "",
        "rooms" => 2,
        "area" => 58,
        "floor" => 6,
        "total_floors" => 8,
        "has_furniture" => true,
        "has_balcony" => false,
        "metro" => "Сенная площадь",
        "available_from" => "2025-04-19"
    ],
    [
        "id" => 9,
        "title" => "Квартира с евроремонтом",
        "alias" => "some-addr-9",
        "city" => "Самара",
        "address" => "ул. Гагарина, 22, Самара",
        "price" => 40000,
        "description" => "",
        "rooms" => 2,
        "area" => 49,
        "floor" => 10,
        "total_floors" => 12,
        "has_furniture" => true,
        "has_balcony" => true,
        "metro" => "Российская",
        "available_from" => "2025-04-16"
    ],
    [
        "id" => 10,
        "title" => "4-комнатная квартира для семьи",
        "alias" => "some-addr-10",
        "city" => "Краснодар",
        "address" => "ул. Светлая, 5, Краснодар",
        "price" => 60000,
        "description" => "",
        "rooms" => 4,
        "area" => 90,
        "floor" => 1,
        "total_floors" => 5,
        "has_furniture" => false,
        "has_balcony" => true,
        "metro" => null,
        "available_from" => "2025-04-22"
    ]
];

// Обработка маршрутов
if ($resource === 'properties') {
    switch ($method) {
        case 'GET':
            if ($alias) {
                // Получение по alias
                $found = null;
                foreach ($properties as $item) {
                    if ($item['alias'] == $alias) {
                        $found = $item;
                        break;
                    }
                }
                if ($found) {
                    $result = $found;
                } else {
                    http_response_code(404);
                    $result = ["error" => "Property not found"];
                }
            } else {
                //фильтрация списка
                // Получаем массив городов из GET-параметра (если передан)
                $selectedCities = $_GET['cities'] ?? [];
                $priceFrom = isset($_GET['priceFrom']) ? (int)$_GET['priceFrom'] : null;
                $priceTo = isset($_GET['priceTo']) ? (int)$_GET['priceTo'] : null;
                $sort = isset($_GET['sort']) ? $_GET['sort'] : null;

                // Фильтруем массив $properties по городам
                $properties = array_filter($properties, function ($property) use ($selectedCities, $priceFrom, $priceTo) {
                    // Фильтр по городам (если cities не пуст)
                    if (!empty($selectedCities) && !in_array($property['city'], $selectedCities)) {
                        return false;
                    }

                    // Фильтр по цене (если указаны priceFrom или priceTo)
                    if ($priceFrom !== null && $property['price'] < $priceFrom) {
                        return false;
                    }
                    if ($priceTo !== null && $property['price'] > $priceTo) {
                        return false;
                    }

                    return true;
                });

                // Сортировка
                if (!empty($sort)) {
                    usort($properties, function ($a, $b) use ($sort) {
                        switch ($sort) {
                            case 'price_asc':
                                return $a['price'] <=> $b['price']; // По возрастанию цены
                            case 'price_desc':
                                return $b['price'] <=> $a['price']; // По убыванию цены
                            case 'date_new':
                                return strtotime($b['available_from']) <=> strtotime($a['available_from']); // Новые сначала
                            case 'date_old':
                                return strtotime($a['available_from']) <=> strtotime($b['available_from']); // Старые сначала
                            default:
                                return 0;
                        }
                    });
                }

                // Пагинация списка
                $page = isset($_GET['page']) ? max((int)$_GET['page'], 1) : 1;
                $limit = isset($_GET['limit']) ? max((int)$_GET['limit'], 1) : 5;
                $offset = ($page - 1) * $limit;

                $paginated = array_slice($properties, $offset, $limit);

                $result = [
                    "page" => $page,
                    "limit" => $limit,
                    "total" => count($properties),
                    "data" => $paginated
                ];
            }
            break;

        case 'POST':
            $new = $input;
            $new['id'] = rand(100, 999);
            $result = $new;
            break;

        case 'PUT':
            if ($id) {
                $input['id'] = (int)$id;
                $result = ["status" => "updated", "property" => $input];
            } else {
                http_response_code(400);
                $result = ["error" => "ID required for update"];
            }
            break;

        case 'DELETE':
            if ($id) {
                $result = ["status" => "deleted", "id" => (int)$id];
            } else {
                http_response_code(400);
                $result = ["error" => "ID required for deletion"];
            }
            break;

        case 'OPTIONS':
            http_response_code(200);
            break;

        default:
            http_response_code(405);
            $result = ["error" => "Метод не разрешён"];
            break;
    }
} else {
    http_response_code(404);
    $result = ["error" => "Not found"];
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
