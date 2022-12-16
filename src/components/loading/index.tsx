import { Wrapper, Title, Spinner, LoadingText } from "./loadingStyles";
const Loading = () => {
  return (
    <Wrapper>
      <p>
        <Title>LoadingPage</Title>
        <Spinner />
        <LoadingText>Loading...중</LoadingText>
      </p>
    </Wrapper>
  );
};

export default Loading;
