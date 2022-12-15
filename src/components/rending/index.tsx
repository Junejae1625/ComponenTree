import {
  Wrapper,
  HeaderTitle,
  Header,
  RepoInput,
  Info,
  Article,
  InputButtonWrapper,
  RepoButton,
} from "./rendingStyles";
// import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const Rending = () => {
  // const [isMouseOver, setIsMouseOver] = useState(false);
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setScreenX(e.clientX);
      setScreenY(e.clientY);
    });
  }, [screenX, screenY]);

  return (
    <>
      {/* <Wrapper>
        <header>
          <HeaderTitle>ComponenTree</HeaderTitle>
        </header>
        <article>
          <RepoInput type="text" />
          <Info>Please typing your Github Repo</Info>
        </article>
      </Wrapper>
*/}
      <Wrapper>
        <Header>
          <HeaderTitle>ComponenTree</HeaderTitle>
        </Header>
        <Article>
          <Info>Please typing your Github Repo</Info>
          <InputButtonWrapper>
            <RepoInput type="text" />
            <RepoButton>Go</RepoButton>
          </InputButtonWrapper>
        </Article>
        {/* <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {new Array(130).fill(0).map((el, i) => (
          <div
            key={uuidv4()}
            style={{
              bottom: 0,
              width: "10px",
              height: "90vh",
              background: `linear-gradient(to bottom, white 60%, blue 40%)`,
              marginRight: "4px",
            }}
          ></div>
        ))}
      </div>  */}
      </Wrapper>
    </>
  );
};

export default Rending;
