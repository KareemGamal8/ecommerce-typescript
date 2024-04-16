import { Container } from "react-bootstrap";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "";
  }

  return (
    <Container className="notFound">
      <h2>{errorStatus}</h2>
      <p>{errorStatusText}</p>
      <Link to="/" replace>
        Looks like you have reached to non-existent page.
        <br />
        How about going page to safety?
      </Link>
    </Container>
  );
}
