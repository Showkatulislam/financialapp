"use client";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form"
import axios from "axios";
import toast from "react-hot-toast";
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email()
});
const Adduser = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: ""
    },
  });
  const loading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      await axios.post('/api/user',values)
      router.refresh()
      form.reset()
      toast.success("User Added Successfully.")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-xl w-96 mx-auto">
        <InputField
          disable={loading}
          name="name"
          placeholder="Name"
          form={form}
        />
        <InputField
          disable={loading}
          name="email"
          placeholder="Email"
          form={form}
        />
        <div className="pt-2">
          <Button disabled={loading} type="submit" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Adduser;
