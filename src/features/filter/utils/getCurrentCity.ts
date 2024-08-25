import { ICity } from "@/entities/city";

export const getCurrentCity = (
  initialFields: { field: string; value: string }[],
  cities: ICity[]
) => {
  const cityId = initialFields.find((el) => el.field === "city")?.value;

  if (cityId) {
    const currentCity = cities.find((el) => el.id === Number(cityId));
    if (currentCity) {
      return currentCity;
    }
  }

  // if (!city) {
  //   const currentCity: ICity | null = null;
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  //   if (currentCity) {
  //     setCity(currentCity);
  //     setLoading(false);
  //   }
  // }

  const moscow = cities.find((el) => el.name === "Москва");
  if (moscow) {
    return moscow;
  } else if (cities.length > 0) {
    return cities[0];
  }

  return null;
};
