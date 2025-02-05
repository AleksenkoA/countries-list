import { useState, useMemo, useEffect } from "react";

interface Country {
  country: string;
  continent: string;
}

export function useFilteredCountries(countries: Country[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = searchQuery
        ? country.country.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesContinent =
        selectedContinents.length === 0 ||
        selectedContinents.includes(country.continent);

      return matchesSearch && matchesContinent;
    });
  }, [countries, searchQuery, selectedContinents]);

  const totalPages = Math.ceil(filteredData.length / 20);
  const paginatedData = useMemo(() => {
    return filteredData.slice((currentPage - 1) * 20, currentPage * 20);
  }, [filteredData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedContinents]);

  return {
    searchQuery,
    setSearchQuery,
    selectedContinents,
    setSelectedContinents,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    uniqueContinents: Array.from(new Set(countries.map((c) => c.continent))),
    countryNames: countries.map((c) => c.country),
  };
}
