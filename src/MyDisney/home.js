import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        {data?.map((props, index) => (
          <Card key={index} to={`/movieDetails/${props.myId}`}>
            <Image src={props?.cardImg} />
            <ImageVeil>
              <span>{props?.title}</span>
            </ImageVeil>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const Card = styled(Link)`
  width: 350px;
  height: 400px;
  border-radius: 10px;
  position: relative;
  transition: all 350ms;
  transform: scale(1);
  margin: 10px;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const ImageVeil = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  border-radius: 10px;
  :hover {
    background: rgb(0, 0, 0, 0.1);
    cursor: pointer;

    span {
      opacity: 1;
    }
  }

  span {
    position: absolute;
    bottom: 30px;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    opacity: 0;
    color: white;
    text-align: center;
  }
`;
