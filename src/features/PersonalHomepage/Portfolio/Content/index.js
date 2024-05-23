import { Repositories } from "./Repositories";
import { RepositoriesLoading } from "./RepositoriesLoading";
import { RepositoriesError } from "./RepositoriesError";

export const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <RepositoriesLoading />;
    case "error":
      return <RepositoriesError />;
    case "success":
      return <Repositories repositories={repositories} />;

    default:
      throw new Error(`incorrent status: ${status}`);
  }
};
