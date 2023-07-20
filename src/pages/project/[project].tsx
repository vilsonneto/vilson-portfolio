import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { project } = router.query;
  return (
    <div>
      <h1>{project}</h1>
    </div>
  );
};

export default Project;
