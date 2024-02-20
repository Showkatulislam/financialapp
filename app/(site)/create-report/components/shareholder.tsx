import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useReportStore } from "@/hooks/useReportStore";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be need.",
  }),
  percentage: z.coerce.number({
    required_error: "percentage will be Number",
    invalid_type_error: "percentage must contain only numbers and decimals.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality must be need.",
  }),
});
export const ShareHolder = () => {
  const {setShareholder } = useReportStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      percentage: 0,
      nationality: "",
    },
  });
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setShareholder(values);
    form.reset()
  };
  return (
    <div className="border p-3 col-span-12">
      <Form {...form}>
        <Title title="ShareHolders" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-2"
        >
          <div className="col-span-4">
            <InputField
              name="name"
              placeholder="ShareHolder Name"
              form={form}
            />
          </div>
          <div className="col-span-4">
            <InputField
              name="percentage"
              placeholder="percentage %"
              type="number"
              form={form}
            />
          </div>
          <div className="col-span-4">
            <InputField
              name="nationality"
              placeholder="Nationality"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <Button disabled={loading} type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
