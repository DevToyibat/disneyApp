import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import data from "./data.json";

const MovieDetails = () => {
  const { myId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(data[myId - 1]);
  }, [myId]);

  return (
    <Container>
      <Wrapper>
        <Content>
          <Image src={movie.backgroundImg} />
          <Title src={movie.titleImg} />
          <SubTitle>{movie.subTitle}</SubTitle>
          <Desc>{movie.description}</Desc>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default MovieDetails;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
    text-align: center;
  }
`;

const Title = styled.img`
  position: absolute;
  top: 150px;
  width: 300px;
  height: 200px;
  padding-left: 5px;

  @media (max-width: 768px) {
    width: 200px;
    
`;

const SubTitle = styled.div`
  position: absolute;
  top: 400px;
  color: white;
  font-style: italic;
  padding-left: 5px;
`;

const Desc = styled.div`
  position: absolute;
  top: 450px;
  color: white;
  width: 700px;
  padding-left: 5px;

  @media (max-width: 768px) {
    width: 350px;
    
`;
