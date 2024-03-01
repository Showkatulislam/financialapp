"use client";

import { useEffect, useState } from "react";
import DemoModel from "../model/demoModel";
import { DeleteProductModal } from "../model/deleteProductModal";
import { EditClientModel } from "../model/editClientModal";
import { EditOrderModal } from "../model/editOrderModal";
import { DeleteOrderModal } from "../model/deleteOrderModal";
import { ShareReportModal } from "../model/share-report";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <DemoModel />
      <DeleteProductModal />
      <EditClientModel />
      <EditOrderModal />
      <DeleteOrderModal />
      <ShareReportModal/>
    </>
  );
};

export default ModelProvider;
