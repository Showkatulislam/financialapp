"use client";
import Container from "@/app/components/Container";
import { ReportDataTable } from "./data-table";
import { columns } from "./columns";
import { useMemo, useState } from "react";
import { Myreport } from "@/types";
import { SearchBar } from "./search-bar";

interface reportprops {
  reports: any;
}

export const TableContainer = ({ reports }: reportprops) => {
  const [property, setProperty] = useState("companyName");
  const [value, setValue] = useState("");

  const filteredReports = useMemo(() => {
    if (!value.trim()) return reports;

    return reports.filter((report: any) => {
      switch (property) {
        case "companyName":
          return report.report.companyName
            .toLowerCase()
            .includes(value.toLowerCase());
        case "client":
          return report.report.client
            .toLowerCase()
            .includes(value.toLowerCase());
        case "shareholders":
          return report.report.shareholders.some((s: any) =>
            s.name.toLowerCase().includes(value.toLowerCase())
          );
        case "managers":
          return report.report.managers.some((m: any) =>
            m.name.toLowerCase().includes(value.toLowerCase())
          );
        default:
          return true;
      }
    });
  }, [reports, property, value]);

  return (
    <Container title="Report">
      <div>
        <SearchBar
          property={property}
          setProperty={setProperty}
          setValue={setValue}
        />
      </div>
      <ReportDataTable data={filteredReports} columns={columns} />
    </Container>
  );
};
