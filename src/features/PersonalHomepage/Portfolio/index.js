import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledArticle, Icon, Header, Text } from "./styled";
import { ReactComponent as Github } from "./icons/github.svg";
import { Content } from "./Content";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../personalHomepageSlice";

const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <>
      <StyledArticle>
        <Icon>
          <Github />
        </Icon>
        <Header>Portfolio</Header>
        <Text>My recent projects</Text>
      </StyledArticle>
      <Content status={repositoriesStatus} repositories={repositories} />
    </>
  );
};

export default Portfolio;
