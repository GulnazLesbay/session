import { WrapperLoading, LoadingText, Spinner } from "./styled";

export const RepositoriesLoading = () => {
  return (
    <WrapperLoading>
      <LoadingText>Please wait. projects are being loaded...</LoadingText>
      <Spinner />
    </WrapperLoading>
  );
};
