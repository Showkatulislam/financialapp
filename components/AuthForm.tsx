"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import InputField from "./inputs/InputField";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const AuthForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      if (res?.error) {
        console.log(res.error);
      }
      if (res?.ok && !res?.error) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-1 px-4 w-96 mx-auto"
      >
        <InputField
          disable={loading}
          name="email"
          placeholder="Email"
          form={form}
          type="email"
        />
        <InputField
          disable={loading}
          name="password"
          placeholder="Password"
          form={form}
          type="password"
        />
        <div className="pt-2">
          <Button disabled={loading} type="submit" size="lg">
            {loading?<p className="animate-spin">FG</p>:"Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
