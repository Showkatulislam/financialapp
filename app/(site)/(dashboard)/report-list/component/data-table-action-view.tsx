import { Row } from "@tanstack/react-table";

interface DataTableRowViewsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowViewsProps<TData>) {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
