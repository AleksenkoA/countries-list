import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface Country {
  country: string;
  continent: string;
}

interface Props {
  data: Country[];
}

const CountryTable: React.FC<Props> = ({ data }) => {
  const { t }: { t: (key: string) => string } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ tableLayout: "fixed", width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "50%", minWidth: "150px" }}>
              <strong>{t("country")}</strong>
            </TableCell>
            <TableCell sx={{ width: "50%", minWidth: "150px" }}>
              <strong>{t("continent")}</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ width: "50%" }}>{item.country}</TableCell>
                <TableCell sx={{ width: "50%" }}>{item.continent}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} style={{ textAlign: "center" }}>
                {t("noSearchResults")}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryTable;
