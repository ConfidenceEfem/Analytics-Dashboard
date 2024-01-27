import styled from "styled-components"

const ItemComp = ({bg,wd,name,amount,percent}) => {
    return (
        <Container>
            <Title>{name}</Title>
            <ProgressBarComp>
                <ProgressBar bg={bg} wd={wd}/>
            </ProgressBarComp>
            <AmountAndPercent>
                <Amount>{amount}</Amount>
                <Percent>{percent}</Percent>
            </AmountAndPercent>
        </Container>
    )
}

export default ItemComp

const ProgressBar = styled.div`
border-radius: 40px;
background: ${({bg})=>bg};
width: ${({wd})=>wd};
height: 100%;
`

const Percent = styled.div`
color: #525252;
   
font-size: 14px;
font-style: normal;
font-weight: 400;
`

const Amount = styled.div`
color:  #525252;
   
font-size: 14px;
font-style: normal;
font-weight: 400;
`

const AmountAndPercent = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`

const ProgressBarComp = styled.div`
width: 100%;
height: 12px;
/* flex-shrink: 0; */
border-radius: 40px;
background: var(--Gray-2, #F5F5F5);

`

const Title = styled.div`
text-align: left;
color: #22242C;
   
font-size: 14px;
font-style: normal;
font-weight: 600;
`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
gap: 13px;

`