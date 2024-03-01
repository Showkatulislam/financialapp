import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputs/InputField";
import { Button } from "@/components/ui/button";
import axios from "axios";
import qs from "query-string";
import { formSchema } from "../../add-client/add-client";
interface Props {
  intialData: any;
  setOpen: (value: boolean) => void;
}

export const EditClient = ({ intialData, setOpen }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...intialData,
    },
  });
  const loading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: `/api/client`,
        query: {
          clientId: intialData.id,
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
        <InputField name="name" placeholder="Name" form={form} />
        <InputField name="email" placeholder="Email" type="email" form={form} />
        <InputField name="address" placeholder="Address" form={form} />
        <InputField name="phone" placeholder="Phone" form={form} />
        <InputField name="contact1" placeholder="Contact1" form={form} />
        <div className="mt-5">
          <Button disabled={loading} type="submit">
            {loading ? (
              <span className="flex items-center animate-pulse">
                Saving data ...
              </span>
            ) : (
              "Updates Client"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
