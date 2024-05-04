import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import TextField from "@/components/inputs/textField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
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
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
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
        <Title title={dic.bankinfo[index]} />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField name="bank" placeholder={`${dic.bank[index]} Name`} form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="agency" placeholder={`${dic.agency[index]} Name`} form={form} />
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
