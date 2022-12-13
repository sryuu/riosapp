import { Link } from "react-router-dom";

function NotFound () {
  return (
    <>
      <h1>not found page</h1>
      <div>
        <Link to={`/`}>back to home</Link>
      </div>
    </>
  );
};

export default NotFound;