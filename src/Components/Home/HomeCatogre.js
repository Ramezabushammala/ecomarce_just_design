import React from 'react'
import { Container,Row } from 'react-bootstrap'
import CatogoryCard from '../Catogory/CatogoryCard'
import SubTitle from '../Uitily/SubTitle'
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
function HomeCatogre() {
  return (
   <Container>
    <SubTitle title="Categories" btntitle="More" pathText="/allcategory"/>
    <Row className="my-2 d-flex justify-content-between">
    <CatogoryCard title={"discounts"} img={clothe} background={"#f4dba4"}/>
    <CatogoryCard title={"discounts"} img={cat2} background="#0034FF" />
    <CatogoryCard title={"discounts"} img={labtop} background="#FFD3E8" />
    <CatogoryCard title={"discounts"} img={clothe} background="#55CFDF" />
    <CatogoryCard title={"discounts"} img={sale} background="#FF6262" />
    <CatogoryCard title={"discounts"} img={pic} background="#F4DBA5" />
    </Row>
   </Container>
  )
}

export default HomeCatogre
