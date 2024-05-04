import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  setValue: (v: any) => void;
}
const TextField = ({
  setValue,
  value,
  name,
  placeholder,
}: InputFieldProps) => {
  return (
    <div>
      <Label>{placeholder}</Label>
      <Textarea
        name={name}
        placeholder={placeholder}
        onChange={(e) => setValue({[e.target.name]:e.target.value})}
        defaultValue={value}
      />
    </div>
  );
};

export default TextField;
