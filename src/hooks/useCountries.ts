import { useEffect, useState } from "react";
import { fetchCountries } from "../services/api";

interface Country {
  country: string;
  continent: string;
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        if (data.length === 0) {
          console.warn("⚠️ API returned empty data, loading local JSON...");
          import("../data/countries.json").then((localData) => {
            setCountries(localData.default);
            setLoading(false);
          });
        } else {
          setCountries(data);
          setLoading(false);
        }
      })
      .catch((error) => console.error("❌ Error fetching countries:", error));
  }, []);

  return { countries, loading };
}
