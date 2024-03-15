"use client";
import DatePicker from "@/components/inputs/DatePicker";
import DropDownField from "@/components/inputs/DropDownField";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./add-task";
import qs from "query-string";
interface Props {
  intialData: any;
  setOpen: (value: boolean) => void;
}
export const EditTask = ({ intialData, setOpen }: Props) => {
  const [allorder, setOrder] = useState();
  const [allclient, setClient] = useState();
  const [alluser, setUser] = useState();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {...intialData}
  });
  useEffect(() => {
    const loadData = async () => {
      const user = await axios.get("/api/user");
      const order = await axios.get("/api/order");
      const client = await axios.get("/api/client");
      setUser(user.data);
      setOrder(order.data);
      setClient(client.data);
    };
    loadData();
  }, []);
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/task`,
        query: {
          taskId: intialData.id,
        },
      });
      await axios.patch(url, {task:values});
      form.reset();
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full space-y-2 max-w-xl w-96 mx-auto"
      >
        <InputField form={form} name="taskName" placeholder="Task name" />

        <DropDownField
          type3={true}
          type3Items={allclient}
          name="clientId"
          placeholder="Client"
          form={form}
        />
        <DropDownField
          type5={true}
          type5Items={allorder}
          name="orderId"
          placeholder="Order"
          form={form}
        />
        <DropDownField
          type4={true}
          type4Items={alluser}
          name="userId"
          placeholder="User"
          form={form}
        />
        <DatePicker form={form} placeholder="Date Time" name="requiredBy" />
        <div className="mt-5">
          <Button disabled={loading} type="submit">
            {loading ? (
              <span className="flex items-center animate-pulse">
                Updating Task ...
              </span>
            ) : (
              "Update Task"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
