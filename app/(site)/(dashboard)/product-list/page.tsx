import Title from "@/components/Title";
import { ShowProduct } from "./product-list";
import { getProduct } from "@/app/actions/get-product";

const page = async() => {
  const products=await getProduct()
  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl">
        <Title title="Product List" />
        <ShowProduct products={products} />
      </div>
    </div>
  );
};

export default page;
