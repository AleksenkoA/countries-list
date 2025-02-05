export const fetchCountries = async (page: number = 1) => {
  try {
    const response = await fetch(
      "https://progress-motion.com/admin/src/docs/2023032403003246604202.json"
    );
    if (!response.ok) throw new Error("API is nit awailable");
    return await response.json();
  } catch (error) {
    console.warn("API error, let's use local data");
    const localData = await import("../data/countries.json");
    return localData.default;
  }
};
