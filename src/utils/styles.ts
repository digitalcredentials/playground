import styled from "styled-components";
import COLORS from "./colors";


export const Title = styled.div`
font-size: 1.6em;
`;

export const SubTitle = styled.div`
font-size: 1.1em;
font-weight: bold;
margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Segoe UI;
  font-size: 25px;
  color: ${COLORS.METEORITE};
  margin-top: 20px;
`;

export const Button = styled.button`
  font-size: 0.8em;
  height: 2em;
  border: none;
  border-radius: 10px;
  color: ${COLORS.METEORITE};
  margin-top: 2em;
  background: ${COLORS.ALABASTER};
  box-shadow: -10px 10px 20px rgba(211, 211, 211, 0.2),
    10px -10px 20px rgba(211, 211, 211, 0.2),
    -10px -10px 20px rgba(255, 255, 255, 0.9),
    10px 10px 25px rgba(211, 211, 211, 0.9);
`;