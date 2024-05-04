import { CL } from "@/app/utils/change-language";
import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ReportState } from "@/hooks/ReportState";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be need.",
  }),
  companyName: z.string().min(2, {
    message: "Company Name must be need.",
  }),
  function: z.string().min(2, {
    message: "Function must be need.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality must be need.",
  }),
});
export const Manager = () => {
  const { editManagerRow, setManager } = ReportState();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: editManagerRow,
  });
  useEffect(() => {
    form.setValue("name", editManagerRow.name);
    form.setValue("function", editManagerRow.function);
    form.setValue("companyName", editManagerRow.companyName);
    form.setValue("nationality", editManagerRow.nationality);
  }, [
    form,
    editManagerRow.companyName,
    editManagerRow.function,
    editManagerRow.name,
    editManagerRow.nationality,
  ]);
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setManager(values);
    form.reset();
  };
  return (
    <div className="border p-3 col-span-12">
      <Form {...form}>
        <Title title={CL("Managers")} />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField name="name" placeholder={CL("ManagerName")} form={form} />
          </div>
          <div className="col-span-6">
            <InputField
              name="companyName"
              placeholder={CL("CompanyName")}
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField name="function" placeholder={CL("Function")} form={form} />
          </div>
          <div className="col-span-6">
            <InputField
              name="nationality"
              placeholder={CL("Nationality")}
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
