import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import TextField from "@/components/inputs/textField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useReportStore } from "@/hooks/useReportStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  bank: z.string().min(2, {
    message: " bank Name must be need.",
  }),
  agency: z.string().min(2, {
    message: " agency Name must be need.",
  }),
  comment: z.string(),
});

export const BankInfo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank: "",
      agency: "",
      comment: "",
    },
  });
  const { setBank } = useReportStore();
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setBank(values);
    form.reset();
  };
  return (
    <div className="border p-3 col-span-12">
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
            <TextField name="comment" placeholder="Comment" form={form} />
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
