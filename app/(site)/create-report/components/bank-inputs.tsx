import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import TextField from "@/components/inputs/textField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ReportState } from "@/hooks/ReportState";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  bank: z.string().min(2, {
    message: " bank Name must be need.",
  }),
  agency: z.string().min(2, {
    message: " agency Name must be need.",
  })
});

export const BankInfo = () => {
  const { editBankRow, setBankData} = ReportState();
  const { bank, agency } = editBankRow;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: editBankRow,
  });
  useEffect(() => {
    form.setValue("bank", bank);
    form.setValue("agency", agency);
  }, [form, bank, agency]);

  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setBankData(values);
    form.reset();
  };
  return (
    <div className="border space-y-3 p-3 col-span-12">
      <Form {...form}>
        <Title title="Bank Information" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField name="bank" placeholder="Bank Name" form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="agency" placeholder="Agency Name" form={form} />
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
