import { WrapperError, ErrorIcon, ErrorHeader, ErrorInfo } from "./styled";
import { ReactComponent as Warring } from "./icons/warring.svg";
import { ButtonLink } from "../../../../../common/ButtonLink";

export const RepositoriesError = () => {
  return (
    <WrapperError>
      <ErrorIcon>
        <Warring />
      </ErrorIcon>
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorInfo>
        Sorry, failed to load Github projects. <br /> You can check them
        directly on Github.
      </ErrorInfo>
      <ButtonLink target="_blank" href={"https://github.com/AllmostHumann"}>
        Go to Github
      </ButtonLink>
    </WrapperError>
  );
};
