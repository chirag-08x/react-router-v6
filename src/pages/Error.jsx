import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404 not found</h1>
      <Link to={"/"}>{"<---"} Go Back to Home</Link>
    </>
  );
};

export default Error;
