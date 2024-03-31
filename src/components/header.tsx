import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0 justify-between w-full">
      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">
          Waku <span className="text-red-400">Fruit</span> Shop
        </Link>
      </h2>
      <div>
        <h2 className="text-lg font-bold tracking-tight">
          <Link to="/about">About</Link>
        </h2>
      </div>
    </header>
  );
};
