import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import prod4 from "../../images/laptops.png";
function Picsection() {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
          </div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={prod4} alt="" />
        </Col>
      </Row>
    </Container>
  )
}

export default Picsection
