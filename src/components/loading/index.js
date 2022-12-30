import { Wrapper, Title, Spinner, LoadingText } from "./loadingStyles";
const Loading = () => {
  return (
    <Wrapper>
      <Title>LoadingPage</Title>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </Wrapper>
  );
};

export default Loading;
