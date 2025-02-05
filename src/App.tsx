import { useCountries } from "./hooks/useCountries";
import { useFilteredCountries } from "./hooks/useFilteredCountries";
import CountryTable from "./components/CountryTable";
import SearchInput from "./components/SearchInput";
import ContinentFilter from "./components/ContinentFilter";
import Pagination from "./components/Pagination";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t }: { t: (key: string) => string } = useTranslation();
  const { countries, loading } = useCountries();
  const {
    setSearchQuery,
    selectedContinents,
    setSelectedContinents,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    uniqueContinents,
    countryNames,
  } = useFilteredCountries(countries);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <LanguageSwitcher />
      <h1 style={{ textAlign: "center", fontSize: "24px" }}>{t("title")}</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <SearchInput onSearch={setSearchQuery} options={countryNames} />
        <ContinentFilter
          continents={uniqueContinents}
          selected={selectedContinents}
          onChange={setSelectedContinents}
        />
      </div>

      {loading ? <p>{t("loading")}</p> : <CountryTable data={paginatedData} />}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
