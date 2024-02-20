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
  companyName: z.string().min(2, {
    message: "Company Name must be need.",
  }),
  function: z.string().min(2, {
    message: "Function must be need.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality must be need.",
  })
});
export const Manager = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
        companyName:"",
        function:"",
        nationality:""
    },
  });
  const loading=form.formState.isSubmitting
  const {setManager}=useReportStore()
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setManager(values)
    form.reset()
  };
  return (
    <div className="border p-3 col-span-12">
      <Form {...form}>
        <Title title="Managers" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-12 gap-x-3 items-center"
        >
          <div className="col-span-6">
            <InputField
              name="name"
              placeholder="Manager Name"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="companyName"
              placeholder="Company Name"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="function"
              placeholder="Function"
              form={form}
            />
          </div>
          <div className="col-span-6">
            <InputField
              name="nationality"
              placeholder="Nationality"
              form={form}
            />
          </div>
          <div className="col-span-12">
            <Button disabled={loading} type="submit"  size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};