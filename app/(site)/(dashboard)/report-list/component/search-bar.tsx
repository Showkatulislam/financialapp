import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const searchby = ["companyName", "client", "shareholders", "managers"];
interface searchbarprops {
  property: string;
  setProperty: (p: string) => void;
  setValue?: (v: string) => void;
}
export const SearchBar = ({
  property,
  setProperty,
  setValue,
}: searchbarprops) => {
  return (
    <div className="flex space-x-5 my-2">
      <div className="w-44">
        <Select
          onValueChange={(value) => setProperty(value)}
          defaultValue={property}
        >
          <SelectTrigger>
            <SelectValue placeholder={property} />
          </SelectTrigger>
          <SelectContent>
            {searchby.map((s, i) => (
              <SelectItem key={i} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-96">
        <Input 
        placeholder={`Search by ${property} name`}
        onChange={(e:any)=>setValue && setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
