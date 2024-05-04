import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  setValue: (v: any) => void;
}
const InputField = ({
  setValue,
  value,
  type,
  name,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <Label>{placeholder}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue({[e.target.name]:e.target.value})}
        defaultValue={value}
      />
    </div>
  );
};

export default InputField;
