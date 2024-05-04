import { CL } from "@/app/utils/change-language";
import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ReportState } from "@/hooks/ReportState";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
  const { setShareholder, editshareholderrow } = ReportState();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: editshareholderrow,
  });
  useEffect(() => {
    form.setValue("name", editshareholderrow.name);
    form.setValue("nationality", editshareholderrow.nationality);
    form.setValue("percentage", editshareholderrow.percentage);
  }, [
    form,
    editshareholderrow.name,
    editshareholderrow.nationality,
    editshareholderrow.percentage,
  ]);
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setShareholder(values);
    form.reset();
  };
  return (
    <div className="border p-3 col-span-12">
      <Form {...form}>
        <Title title={CL("ShareHolders")}/>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-2"
        >
          <div className="col-span-4">
            <InputField
              name="name"
              placeholder={CL("ShareHolderName")}
              form={form}
            />
          </div>
          <div className="col-span-4">
            <InputField
              name="percentage"
              placeholder={CL("percentage")}
              type="number"
              form={form}
            />
          </div>
          <div className="col-span-4">
            <InputField
              name="nationality"
              placeholder={CL("nationality")}
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
