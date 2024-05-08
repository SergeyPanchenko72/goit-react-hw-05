import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <p>
        Oops, sometsing wents wrong.Please try again or visit out
        <Link to="/">home page</Link>
      </p>
    </div>
  );
}
