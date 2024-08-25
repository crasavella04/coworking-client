import { getCoworkingById, ICoworking } from "@/entities/coworking";
import { useEffect, useState } from "react";

export const useGetCoworkingItem = (id: string | undefined) => {
  const [coworking, setCoworking] = useState<null | ICoworking>(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      setError(false);
      try {
        if (!id) throw new Error();
        const item = await getCoworkingById(id);
        setCoworking(item);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getItem();
  }, [id]);

  return {
    coworking,
    isLoading,
    isError,
  };
};
