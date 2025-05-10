import { Link, Outlet, HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function Route() {
  return (
    <>
      <HeadContent />

      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>

      <hr />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
