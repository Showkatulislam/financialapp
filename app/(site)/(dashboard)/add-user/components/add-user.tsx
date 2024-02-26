"use client";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form"
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});
const Adduser = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const loading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 max-w-xl w-96 mx-auto">
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
        <InputField
          disable={loading}
          name="password"
          placeholder="password"
          form={form}
        />
        <InputField
          disable={loading}
          name="address"
          placeholder="Address"
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
