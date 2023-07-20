import axios from "axios";

const apiGithub = axios.create({
  baseURL:
    "https://api.github.com/users/vilsonneto/repos?sort=created&direction=desc",
  timeout: 5000,
});

export default apiGithub;
