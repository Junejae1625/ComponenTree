import {
  Wrapper,
  Lists,
  GraphImg,
  ListWrapper,
  HomeButton,
} from "./headerStyles";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const listData = [
  { name: "Graph 1", link: "/graph1" },
  { name: "Graph 2", link: "/graph2" },
  { name: "Graph 3", link: "/graph3" },
];
const LayoutHeader = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Link to="/">
        <HomeButton>Home</HomeButton>
      </Link>
      <ListWrapper>
        {listData.map((el, i) => (
          <Link to={el.link} key={uuidv4()} style={{ textDecoration: "none" }}>
            <Lists currentPage={location.pathname === el.link}>
              <GraphImg
                src={
                  location.pathname === el.link
                    ? `/public_assets/graphClick${i + 1}.svg`
                    : `/public_assets/graph${i + 1}Icon.svg`
                }
              />
              <span>{el.name}</span>
            </Lists>
          </Link>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default LayoutHeader;
