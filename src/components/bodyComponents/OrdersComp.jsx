import styled from "styled-components"
import TableComponent from "../TableComponent"

const OrdersComp = () => {
    return ( 
        <Container>
            <Heading>
                <Title>Last Orders</Title>
                <SeeAll>See All</SeeAll>
            </Heading>
            <TableComp>
                <TableComponent/>
            </TableComp>
        </Container>
    )
}

export default OrdersComp 

const TableComp = styled.div``

const SeeAll = styled.div`
color: #34CAA5;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 500;
cursor: pointer;
@media screen and (max-width:600px){
   font-size: 13px;
  }
`

const Title = styled.div`
color: #26282C;
font-size: 18px;
font-style: normal;
font-weight: 600;
padding: 0 15px;
@media screen and (max-width:600px){
   font-size: 15px;
  }
`

const Heading = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;
`

const Container = styled.div`
grid-column: span 3;
grid-row: span 2;
border-radius: 14px;
border: 1px solid #EDF2F7;
background: #FFF;
padding: 20px 15px;
display:flex;
flex-direction: column;
/* align-items: center; */


`