"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Client,  Product } from "@prisma/client";

interface DropDownFieldProps {
  value: any;
  setValue: (v: any) => void;
  name: string;
  items?: string[];
  type2Items?: Product[] | null;
  type3Items?: Client[] | null;
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
  placeholder: string;
}
const DropDownField = ({
  items,
  placeholder,
  type1,
  type2,
  type3,
  type2Items,
  type3Items,
  value,
  setValue,
  name,
}: DropDownFieldProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <Label>{placeholder}</Label>
      <Select
        onValueChange={(value) => setValue({ [name]: value })}
        defaultValue={value}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {type1 && (
          <SelectContent>
            {items?.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        )}
              {type2 && (
          <SelectContent>
            {type2Items?.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.productName}
              </SelectItem>
            ))}
          </SelectContent>
        )}
        {type3 && (
          <SelectContent>
            {type3Items?.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>
    </div>
  );
};

export default DropDownField;
