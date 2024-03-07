import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const columnName = "companyName";
  const column = table.getColumn(columnName);
  const filterValue = (column?.getFilterValue() as string) ?? "";
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <Input
          placeholder="Filter by Company Name..."
          value={filterValue}
          onChange={(event) => column?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
    </div>
  );
}
