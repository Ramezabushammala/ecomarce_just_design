import React from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Catogory/CategoryContainer";
import PaginationCompontent from "../../Components/Uitily/Pagination";
const AllCategoryPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent />
    </Container>
  );
};

export default AllCategoryPage;
