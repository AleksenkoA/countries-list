import React from "react";
import { MenuItem, Select, SelectChangeEvent, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.split("-")[0];

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={["en", "es"].includes(currentLanguage) ? currentLanguage : "en"}
      onChange={changeLanguage}
      sx={{ marginBottom: 2 }}
    >
      <MenuItem value="en">
        <Box component="span" sx={{ marginRight: 1 }}>
          🇬🇧
        </Box>{" "}
        ENG
      </MenuItem>
      <MenuItem value="es">
        <Box component="span" sx={{ marginRight: 1 }}>
          🇪🇸
        </Box>{" "}
        ESP
      </MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
