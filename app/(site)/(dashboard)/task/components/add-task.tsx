"use client";
import DatePicker from "@/components/inputs/DatePicker";
import DropDownField from "@/components/inputs/DropDownField";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { priority } from "@/public/dropdownData";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import qs from "query-string";
const formSchema = z.object({
  taskName: z.string().min(2, {
    message: "Task Name will be min 2 lenght",
  }),
  orderId: z.string().min(1, {
    message: "Order Id is Needed",
  }),
  clientId: z.string().min(1, {
    message: "Client id is Needed",
  }),
  userId: z.string().min(1, {
    message: "User id is needed.",
  }),
  requiredBy: z.date({
    required_error: "A date of RequiredBy  is required.",
  }),
});
interface Props{
  Colse:(b:boolean)=>void
}
export const AddTask = ({Colse}:Props) => {
  const [allorder, setOrder] = useState();
  const [allclient, setClient] = useState();
  const [alluser, setUser] = useState();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: "",
      userId: "",
      orderId: "",
      clientId: "",
      requiredBy: new Date(),
    },
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
      await axios.post('/api/task', {task:values});
      form.reset();
      router.refresh();
      Colse(false)
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
                Creating Task ...
              </span>
            ) : (
              "Create Task"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
