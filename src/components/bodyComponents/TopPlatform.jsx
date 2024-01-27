import styled from "styled-components";
import ItemComp from "../ItemComp";

const TopPlatform = () => {
  return (
    <Container>
      <Heading>
        <TopText>Top Platform</TopText>
        <SeeAll>See All</SeeAll>
      </Heading>
      <ItemHolder>
        <ItemComp
          name={"Book Bazaar"}
          wd="60%"
          amount={" $2,500,000"}
          percent={"+15%"}
          bg="#6160DC"
        />
        <ItemComp
          name={"Artisan Aisle"}
          wd="50%"
          amount={" $1,800,000"}
          percent={"+10%"}
          bg="#54C5EB"
        />
        <ItemComp
          name={"Toy Troop"}
          wd="30%"
          amount={" $1,200,000"}
          percent={"+8%"}
          bg="#FFB74A"
        />
      </ItemHolder>
    </Container>
  );
};

export default TopPlatform;

const ItemHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const SeeAll = styled.div`
  color: #34caa5;
  text-align: center;
  
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  transform: scale(1);
  transition: all 550ms;
  :hover{
    transform: scale(0.95);
  }
`;

const TopText = styled.div`
  color: #26282c;
  
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Container = styled.div`
  grid-column: span 2;
  grid-row: span 2;

  display: inline-flex;
  padding: 16px 16px 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
  background: white;
`;
