import { Wrapper, Title, Spinner, LoadingText } from "./loadingStyles";
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
