import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitily/SubTitle'
import Prodactcard from './Prodactcard'
import prod3 from "../../images/prod4.png";
import prod1 from "../../images/item.png";
import prod2 from "../../images/labtop.png";
import prod4 from "../../images/laptops.png";
function CardProdactcomponent(props) {
  return (
    <Container>
    <SubTitle title={props.titl} btntitle={props.btntitle}/>
    <Row className="my-2 d-flex justify-content-between">
        <Prodactcard img={prod3}/>
        <Prodactcard img={prod1}/>
        <Prodactcard img={prod2}/>
        <Prodactcard img={prod4}/>
    </Row>
   </Container>
  )
}

export default CardProdactcomponent
