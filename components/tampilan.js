import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Custom = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 10%;
  &: hover {
    background-color: red;
  } ;
`;
