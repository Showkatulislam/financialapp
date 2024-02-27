import React from "react";
import { AddClient } from "./add-client";
import Container from "@/app/components/Container";

const page = () => {
  return (
    <Container title="Add Client" description="">
      <AddClient />
    </Container>
  );
};

export default page;
