"use client"
import styled from "styled-components"
import profile from "../assets/profile.png"
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import img from "../assets/logo.png"
import MobileNavBar from "./MobileNavBar";

const Header = ({toggle, setToggle}) => {
    return (
        <Container>
            {/* <MobileNavBar/>  */}
            <MenuMainIcon
              onClick={()=>{
                setToggle(!toggle)
            }}
            >
            <MenuIcon/>
            </MenuMainIcon>
            <Logo src={img}/>
            <Title>Dashboard</Title>
            <NavsHolder>
                <SearchBarComp>
                    <SearchIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
</svg>

                    </SearchIcon>
                    <Input placeholder="Search..."/>
                </SearchBarComp>
                <DateComp>
                    <DateIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z" stroke="black" stroke-width="1.37144"/>
<path d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999" stroke="black" stroke-width="1.37144" stroke-linecap="round"/>
<path d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z" fill="black"/>
</svg>
                    </DateIcon>
                    <DateText>
                        Novermber 15, 2023
                    </DateText>
                </DateComp>
                <MobileSearchIcon>
                    <NotifyIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
</svg>

                    </NotifyIcon>
                </MobileSearchIcon>
                <MobileTimeComp>
                <NotifyIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z" stroke="black" stroke-width="1.37144"/>
<path d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999" stroke="black" stroke-width="1.37144" stroke-linecap="round"/>
<path d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z" fill="black"/>
</svg>
                    </NotifyIcon>
                </MobileTimeComp>
                <NotificationComp>
                    <NotifyIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z" fill="#0D062D"/>
</svg>
                    </NotifyIcon>
                </NotificationComp>
                <ProfileComp>
                    <ProfileImage src={profile}/>
                    <NameAndIcon>
                        <NameComp>
                            <Name>Justin Bergson</Name>
                            <Email>Justin@gmail.com</Email>
                        </NameComp>
                        <CaretIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D"/>
</svg>
                        </CaretIcon>
                    </NameAndIcon>
                </ProfileComp>
            </NavsHolder>
        </Container>
    )
}

export default Header

const Logo = styled(Image)`
display:none;

  @media screen and (max-width:950px){
    /* margin: 24px 0; */
    display:flex;
  width: 27px;
  height: 27px;
  object-fit: contain;
  cursor:pointer;
  }
`;

const MobileSearchIcon = styled.div`
display:none;
@media screen and (max-width:950px){
   display:flex;
   cursor:pointer;
  }
  @media screen and (max-width:700px){
    display:none;
  }
`

const MenuMainIcon = styled.div`
display:none;
@media screen and (max-width:950px){
   display:flex;
   cursor:pointer;
  }
`

const MobileTimeComp = styled.div`
    display:none;
    @media screen and (max-width:1036px){
    display:flex;
  }
    @media screen and (max-width:700px){
    display:none;
  }

`

const CaretIcon = styled.div`
width: 20px;
height: 20px;
cursor: pointer;
`

const Email = styled.div`
color: #787486;
text-align: right;
 font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Name = styled.div`
color: #26282C;
text-align: right;
 font-size: 15px;
font-style: normal;
font-weight: 450;
line-height: normal;
`

const NameComp = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
gap: 4px;
text-align: right;
@media screen and (max-width:950px){
    display:none;
  }

`
const NameAndIcon = styled.div`
display:flex;
gap: 10px;
align-items: center;
`

const ProfileImage = styled(Image)`
width: 38px;
height: 38px;
border-radius: 50%;
object-fit: contain;
@media screen and (max-width:950px){
   width:40px;
   height:30px;
  }
`

const DateText = styled.div`
    color: #26282C;
font-size: 14px;
font-style: normal;
font-weight: 500;

`

const NotifyIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
border: 0.769px solid #DADDDD;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 650ms;
transform: scale(1);
:hover{
   /* border: 0.769px solid rgb(281,244,255,1); */
   transform: scale(1.02);
}

svg{
 
}
`

const DateIcon = styled.div`

svg{

}
`

const Input = styled.input`
height: 100%;
display:flex;
flex: 1;
border:none;

outline:none;
background-color: transparent;
padding: 0 5px;
font-size: 14px;

/* width:100%; */
::placeholder{
font-size: 14px;
font-style: normal;
font-weight: 400;
}
`

const SearchIcon = styled.div`
display:flex;
align-items: center;
height:100%;

svg{
    cursor: pointer;
    margin-left:15px;
}
`


const ProfileComp = styled.div`
display: flex;
padding: 6px 8px;
justify-content: center;
align-items: center;
gap: 14px;
border-radius: 28px;
border: 1px solid #DADDDD;
@media screen and (max-width:950px){
    gap:10px;
    /* width: auto; */
    padding: none;
    border-radius: none;
    border: none;
    margin-left: 15px;

  }
  @media screen and (max-width:700px){
    margin-left:0px;

  }
`

const NotificationComp = styled.div``

const DateComp = styled.div`
display:flex;
gap: 10px;
align-items: center;
@media screen and (max-width:1036px){
    display:none;
  }
`

const SearchBarComp = styled.div`
width: 320px;
height: 45px;
border-radius: 24px;
border: 1px solid #DADDDD;
background: white;
/* overflow:hidden; */
display:flex;
align-items: center;
margin-right: 10px;
@media screen and (max-width:1119px){
    width: 300px;
    border-radius: 20px;
    margin-right: 8px;
  }
@media screen and (max-width:950px){
   display:none;
  }
`

const NavsHolder = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
gap: 20px;
align-items: center;
@media screen and (max-width:950px){
   flex: 0;
  }
`

const Title = styled.div`
color: #26282C;
font-size: 19px;
font-style: normal;
font-weight: 600;
@media screen and (max-width:950px){
  display:none;
  }
@media screen and (max-width:400px){
   font-size: 15px;
  }
`

const Container = styled.div`
    width:100%;
    background-color: rgb(250,250,250);
    height: 80px;
    border-bottom: 1px solid #E5EAEF;
    display: flex;
    align-items: center;
    padding: 0 30px;
    /* position:relative; */
    @media screen and (max-width:950px){
    justify-content: space-between;
    
  }
  @media screen and (max-width:600px){
   padding: 0 15px;
  }

`