import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4rem 4rem 0 4rem;
`;
export const Header = styled.header`
  width: 100%;
  text-align: start;
`;

export const HeaderTitle = styled.h1`
  color: #202329;
  font-size: 2rem;
  font-weight: 800;
`;

export const Article = styled.article`
  background-color: #202329;
  border-radius: 30px 30px 0px 0px;
  height: calc(100vh - 9.7rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 10rem;
`;

export const Info = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const InputButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 10px;
`;

export const RepoInput = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  /* padding: 5px 10px; */
  font-size: 1.5rem;
  /* outline: none; */
`;

export const RepoButton = styled.button`
  width: 80px;
  height: 30px;
`;
