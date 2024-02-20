import { db } from "@/lib/db";

export const getOrder = async () => {
  try {
    const orders = await db.order.findMany({
      include:{
        product:true,
        client:true
      }
    });
    if(!orders){
      return []
    }
    return orders;
  } catch (error) {
    console.log("eeerror comming from order",error);
    
    return [];
  }
};
