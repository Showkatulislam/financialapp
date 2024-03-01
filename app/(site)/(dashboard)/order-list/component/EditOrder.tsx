import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import axios from "axios";
import qs from "query-string";
import { formSchema } from "../../add-order/add-order";
import DropDownField from "@/components/inputs/DropDownField";
import { useEffect, useState } from "react";
import DatePicker from "@/components/inputs/DatePicker";
import { priority } from "@/public/dropdownData";
interface Props {
  intialData: any;
  setOpen: (value: boolean) => void;
}

const EditOrder = ({ intialData, setOpen }: Props) => {
  const [allproduct,setProduct] =useState();
  const [allclient, setClient] = useState();
  const [alluser,setUser] = useState();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...intialData,
    },
  });
  useEffect(()=>{
    const loadData=async()=>{ 
      const user=await axios.get('/api/user')
      const product=await axios.get('/api/product')
      const client=await axios.get('/api/client')
      setUser(user.data)
      setProduct(product.data)
      setClient(client.data)
    }
    loadData()
  },[])
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/order`,
        query: {
          orderId: intialData.id,
        },
      });
      await axios.patch(url, values);
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
        <InputField
          form={form}
          name="companyName"
          placeholder="Companay Name"
          disable={loading}
        />
        <DropDownField
          type4={true}
          type4Items={alluser}
          name="userId"
          placeholder="User"
          form={form}
        />
        <div className="mt-5">
          <Button disabled={loading} type="submit">
            {loading ? (
              <span className="flex items-center animate-pulse">
                Saving data ...
              </span>
            ) : (
              "Updates Product"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditOrder;
