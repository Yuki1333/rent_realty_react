export const formatPrice = (value: number): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 20,
  }).format(value);
}


export const formatDate = (
  value: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string => {
  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
}


export const buildQueryParams = (filters: Record<string, any>): string => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => params.append(`${key}[]`, val));
    } else if (value !== undefined && value !== null) {
      params.set(key, value.toString());
    }
  });

  return params.toString();
}


export const parseQueryParams = (search: string) => {
  const params = new URLSearchParams(search);

  const cities = params.getAll("cities[]");
  const priceFrom = params.get("priceFrom");
  const priceTo = params.get("priceTo");
  const sort = params.get("sort");

  const filters: Record<string, any> = {};

  if (cities.length > 0) {
    filters.cities = cities;
  }

  if (priceFrom) {
    filters.priceFrom = Number(priceFrom);
  }

  if (priceTo) {
    filters.priceTo = Number(priceTo);
  }

  if (sort) {
    filters.sort = sort;
  }

  return filters;
}
