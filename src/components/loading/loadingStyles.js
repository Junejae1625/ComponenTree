import styled from "styled-components";

export const Wrapper = styled.article`
  width: 100%;
  height: 100vh;
  background-color: #232029;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  display: none;
`;

export const Spinner = styled.div`
  width: 84px;
  height: 84px;
  border: 5px solid #d3d3d4;
  border-bottom-color: #2bad77;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1.5s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.div`
  color: #e4571b;
  padding-top: 16px;
  font-size: 16px;
  font-weight: 600;
`;
