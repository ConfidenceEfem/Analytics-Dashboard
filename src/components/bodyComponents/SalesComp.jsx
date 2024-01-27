import styled from "styled-components"
import SalesChart from "../SalesChart"

const SalesComp = () => {
    return ( 
        <Container>
            <Heading>
                <HeadingText>Sales Trend</HeadingText>
                <RightItem>
                    <ShortByText>Short by:</ShortByText>
                    <WeeklySelectComp>
                        <option>Weekly</option>
                    </WeeklySelectComp>
                </RightItem>
            </Heading>
            <ChartComp>
                <SalesChart/>
            </ChartComp>
        </Container>
    )
}

export default SalesComp 

const WeeklySelectComp = styled.select`
border-radius: 20px;
border: 1px solid #E1DFDF;

background: #FFF;

display: flex;
padding: 6px 12px;
flex-direction: column;
align-items: center;
gap: 10px;
::placeholder{
    font-size: 12px;
}
option{
    font-size: 13px;
}
`

const ShortByText = styled.div`
color: #3A3F51;
   
font-size: 14px;
font-style: normal;
font-weight: 500;
`

const RightItem = styled.div`
display:flex;
align-items: center;
gap: 10px;
`

const ChartComp = styled.div`
width: 100%;
height: 400px;;
/* height: 100%; */
`

const HeadingText = styled.div`
color: #26282C;
   
font-size: 18px;
font-style: normal;
font-weight: 600;
`
const Heading = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
`

const Container = styled.div`
/* padding: 5px; */
color: green;
grid-column: span 3;
grid-row: span 2;
border-radius: 14px;
border: 1px solid #EDF2F7;
padding: 15px;
background: #FFF;
`