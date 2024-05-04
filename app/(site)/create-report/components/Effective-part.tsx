import Title from "@/components/Title";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  year: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  count: z.string({
    required_error: "It will be number",
  }),
});
export const EffectivePart = () => {
  const { setEffectiveData } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: "",
      count: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setEffectiveData(values);
  };
  return (
    <div className="border items-center p-3 col-span-12">
      <Form {...form}>
        <Title title={`${dic.effective[index]} Data`}/>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField name="year" placeholder={dic.Year[index]} form={form} />
          </div>
          <div className="col-span-6">
            <InputField name="count" placeholder="" form={form} />
          </div>

          <div className="col-span-12">
            <Button type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
