import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { SelectItem } from "@radix-ui/react-select";
import { format } from "date-fns";

interface DataTableToolbarProps {
  property: string;
  setProperty: (property: string) => void;
  setValue: (value: string) => void;
  date: any;
  setDate: any;
}

const searchBy = ["companyName", "client", "date"];
const searchFieldName = ["Company Name", "Client", "Date"];

export const DataTableToolbar = ({
  setValue,
  property,
  setProperty,
  date,
  setDate,
}: DataTableToolbarProps) => {
  return (
    <div className="flex gap-x-5 my-3">
      <div>
        <Select
          onValueChange={(value) => setProperty(value)}
          defaultValue={property}
        >
          <SelectTrigger>
            <SelectValue>{property}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {searchBy.map((p, i) => (
              <SelectItem key={i} value={p}>
                {searchFieldName[i]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-96">
        {(property === searchBy[0] || property === searchBy[1]) && (
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            placeholder={`Search by ${
              searchFieldName[searchBy.indexOf(property)]
            }`}
          />
        )}
        {property === searchBy[2] && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};
