"use client";

import Container from "@/app/components/Container";
import { SkeletonTable } from "@/app/components/Skeleton-Component";

const loading = () => {
  return (
    <Container 
    title="..">
      <SkeletonTable />
    </Container>
  );
};

export default loading;
