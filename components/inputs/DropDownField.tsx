"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Client, Product, User } from "@prisma/client";

interface DropDownFieldProps {
  form: any;
  name: string;
  items?: string[];
  type2Items?: Product[] | null;
  type3Items?: Client[] | null;
  type4Items?:User[] | null,
  type1?: boolean;
  type2?: boolean;
  type3?: boolean;
  type4?:boolean,
  placeholder: string;
  disable?: boolean;
}
const DropDownField = ({
  form,
  name,
  placeholder,
  disable,
  type1,
  type2,
  type3,
  type4,
  items,
  type2Items,
  type3Items,
  type4Items
}: DropDownFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{placeholder}</FormLabel>
          <Select
            disabled={disable}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
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
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            )}
            {type4 && (
              <SelectContent>
                {type4Items?.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            )}
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DropDownField;
