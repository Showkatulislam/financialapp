"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { priority } from "@/public/dropdownData";
import { Client, Product } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DropDownField from "@/components/inputs/DropDownField";
import InputField from "@/components/inputs/InputField";
import { useEffect, useState } from "react";
import DatePicker from "@/components/inputs/DatePicker";

const formSchema = z.object({
  clientId: z.string().min(1, {
    message: "Please Select Client.",
  }),
  productId: z.string().min(1, {
    message: "Please Select Product.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  priority: z.string().min(1, {
    message: "Please Select Product.",
  }),
});

interface AddOrderProps {
  products: Product[] | null;
  clients: Client[] | null;
}

export const AddOrder = ({ products, clients }: AddOrderProps) => {
  const [allproduct, __] = useState(products);
  const [allclient, _] = useState(clients);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientId: "",
      productId: "",
      dob:new Date(),
      priority: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      axios.post("/api/order", values);
      toast.success("Order added successfully");
      router.refresh();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <DropDownField
          type3={true}
          type3Items={allclient}
          name="clientId"
          placeholder="Client"
          form={form}
        />
        <DropDownField
          type2={true}
          type2Items={allproduct}
          name="productId"
          placeholder="Product"
          form={form}
        />
        <DatePicker form={form} placeholder="Date Time" name="dob" />
        <DropDownField
          type1={true}
          items={priority}
          name="priority"
          placeholder="Priority"
          form={form}
        />
        <Button disabled={isLoading} type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};
