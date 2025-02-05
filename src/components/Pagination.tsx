import React from "react";
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const { t }: { t: (key: string) => string } = useTranslation();
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 2 }}
    >
      <Button
        variant="contained"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {t("previousPage" as any)}
      </Button>

      <span>
        {t("pageNumber_part1" as any)} {currentPage}{" "}
        {t("pageNumber_part2" as any)} {totalPages}
      </span>

      <Button
        variant="contained"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {t("nextPage" as any)}
      </Button>
    </Stack>
  );
};

export default Pagination;
