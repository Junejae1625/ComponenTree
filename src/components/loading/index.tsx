import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: none;
`;

const Spinner = styled.div`
  width: 72px;
  height: 72px;
  border: 5px solid #d3d3d4;
  border-bottom-color: #2bad77;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  color: #e4571b;
  padding-top: 16px;
  font-size: 24px;
`;

const Loading = () => {
  return (
    <Wrapper>
      <p>
        <Title>LoadingPage</Title>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </p>
    </Wrapper>
  );
};

export default Loading;
