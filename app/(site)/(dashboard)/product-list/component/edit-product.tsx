import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import axios from "axios";
import qs from "query-string";
import { formSchema } from "../../add-product/add-product";
import DropDownField from "@/components/inputs/DropDownField";
import { countries, languages } from "@/public/dropdownData";
interface Props {
  intialData: any;
  setOpen: (value: boolean) => void;
}

export const EditProduct = ({ intialData, setOpen }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...intialData,
    },
  });
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/product`,
        query: {
          productId: intialData.id,
        },
      });
      await axios.patch(url, values);
      form.reset();
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full space-y-2 max-w-xl w-96 mx-auto"
      >
        <InputField placeholder="Product Name" form={form} name="productName" />
        <DropDownField
          type1={true}
          items={countries}
          form={form}
          name="country"
          disable={loading}
          placeholder="Select Country"
        />
        <DropDownField
          type1={true}
          items={languages}
          form={form}
          name="language"
          placeholder="Select Language"
          disable={loading}
        />
        <InputField
          type="number"
          disable={loading}
          placeholder="Price"
          form={form}
          name="price"
        />
        <div className="mt-5">
          <Button disabled={loading} type="submit">
            {loading ? (
              <span className="flex items-center animate-pulse">
                Saving data ...
              </span>
            ) : (
              "Updates product"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
