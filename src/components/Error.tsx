import { useRouteError } from "react-router-dom";

export default function Error() {
  const err: any = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!</h1>
      <h2>Something went wrong!!</h2>
    </div>
  );
}
