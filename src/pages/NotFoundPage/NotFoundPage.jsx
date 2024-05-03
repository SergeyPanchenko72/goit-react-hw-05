import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Please visit out <Link to="/">home page</Link>
      </p>
    </div>
  );
}
