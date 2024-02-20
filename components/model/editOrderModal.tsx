import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/modeStore";
import { priority } from "@/public/dropdownData";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useEffect } from "react";
import DropDownField from "../inputs/DropDownField";
import DatePicker from "../inputs/DatePicker";
import qs from "query-string";
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

export const EditOrderModal = () => {
  const router = useRouter();
  const { data,isOpen,type,onClose } = useModal();
  const isModalOpen=isOpen && type=="editOrder"
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientId: "",
      productId: "",
      dob:new Date(),
      priority: "",
    },
  });
  useEffect(() => {
    if (data.order) {
      form.setValue("clientId", data.order.clientId);
      form.setValue("productId", data.order.productId);
      form.setValue("dob", data.order?.dob);
      form.setValue("priority", data.order.priority);
    }
  }, [form, data]);
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/order`,
        query: {
          orderId: data?.order?.id,
        },
      });
      await axios.patch(url, values);
      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="pt-3 px-5">
          <DialogTitle className="text-center text-2xl">
            Edit Order
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <DropDownField
                type3={true}
                type3Items={data.clients}
                name="clientId"
                placeholder="Client"
                form={form}
              />
              <DropDownField
                type2={true}
                type2Items={data.products}
                name="productId"
                placeholder="Product"
                form={form}
              />
              <DatePicker name="dob" placeholder="Date" form={form} />
              <DropDownField
                type1={true}
                items={priority}
                name="priority"
                placeholder="Priority"
                form={form}
              />
              <DialogFooter className="py-4 px-6">
                <div className="flex justify-between items-center w-full">
                  <Button onClick={onClose} >
                    Cancel
                  </Button>
                  <Button type="submit" >
                    Save
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
