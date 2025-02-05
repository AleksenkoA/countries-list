import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

interface Props {
  onSearch: (value: string) => void;
  options?: string[];
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const { t }: { t: (key: string) => string } = useTranslation();

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setErrorMessage(t("errorLettersOnly" as any));
      return;
    }

    setInputValue(value);
    setErrorMessage("");

    onSearch(value.toLowerCase());
  };

  return (
    <TextField
      label={t("searchPlaceholder" as any)}
      variant="outlined"
      fullWidth
      value={inputValue}
      onChange={handleChange}
      error={Boolean(errorMessage)}
      helperText={errorMessage}
      sx={{ width: "100%" }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
