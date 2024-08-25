import { useSearchParams } from "react-router-dom";

export const useGetInitialFilterData = () => {
  const [searchParams] = useSearchParams();

  const data = searchParams
    .toString()
    .split("&")
    .map((el) => {
      const [field, value] = el.split("=");
      return { field, value };
    });

  return data;
};
