import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

interface Props {
  continents: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const ContinentFilter: React.FC<Props> = ({
  continents,
  selected,
  onChange,
}) => {
  const options = continents.map((c) => ({ label: c, value: c }));
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <Select
      isMulti
      options={options}
      value={options.filter((c) => selected.includes(c.value))}
      onChange={(selectedOptions) =>
        onChange(selectedOptions.map((c) => c.value))
      }
      placeholder={t("dropdownPlaceholder" as any)}
      styles={{
        control: (provided) => ({
          ...provided,
          minHeight: "56px",
          fontSize: "16px",
        }),
        valueContainer: (provided) => ({
          ...provided,
          minHeight: "56px",
        }),
      }}
    />
  );
};

export default ContinentFilter;
