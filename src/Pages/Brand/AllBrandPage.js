import React from "react";
import { Container } from "react-bootstrap";
import BrandContainer from "../../Components/Brand/BrandContainer";
import PaginationCompontent from "../../Components/Uitily/Pagination";
const AllBrandPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <BrandContainer />
      <PaginationCompontent />
    </Container>
  );
};

export default AllBrandPage;
