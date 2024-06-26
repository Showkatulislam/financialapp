"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import InputField from "@/components/inputs/InputField";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Adress must be at least 2 characters.",
  }),
  contact1: z.string().min(2, {
    message: "Contact1 must be at least 2 characters.",
  }),
  contact2: z.string().min(2, {
    message: "Contact2 must be at least 2 characters.",
  }),
});

export const AddClient = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      contact1: "",
      contact2: "",
    },
  });
  const loading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/client", values);
      toast.success("Client add Successfully");
      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form} >
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
          name="phone"
          placeholder="Phone"
          form={form}
        />
        <InputField
          disable={loading}
          name="address"
          placeholder="Address"
          form={form}
        />
        <InputField
          disable={loading}
          name="contact1"
          placeholder="Contact1"
          form={form}
        />
        <InputField
          disable={loading}
          name="contact2"
          placeholder="Contact2"
          form={form}
        />
        <div className="pt-2">
          <Button disabled={loading} type="submit" size="lg">
           {loading?<p className="animate-spin">FG</p>:"Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};