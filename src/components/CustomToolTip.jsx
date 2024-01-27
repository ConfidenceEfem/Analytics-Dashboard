import styled from "styled-components"

const CustomToolTip = ({label,payload}) => {
    return (
        <Container>
            {
                payload?.map((e)=>(
                    <BoxValue>${e?.value}</BoxValue>
                ))
            }
            
            <CaretIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="40" viewBox="0 0 80 32" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z" fill="#090C2C"/>
</svg>
            </CaretIcon>
        </Container>
    )
}

export default CustomToolTip

const CaretIcon = styled.div``

const BoxValue = styled.div`
color: white;
font-size: 10px;
position: absolute;
left: 20px;
top: 10px;

`

const Container = styled.div`
position: relative;


`