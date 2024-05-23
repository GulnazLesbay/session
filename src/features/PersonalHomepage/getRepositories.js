import axios from "axios";

const repoURL = "https://api.github.com/users/GulnazLesbay/repos";

export const getRepositories = () =>
  axios.get(repoURL).then((response) => response.data);
