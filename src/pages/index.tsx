export default async function HomePage() {
  return (
    <div>
      <title>Waku Fruit Shop</title>
      <h1 className="text-4xl font-bold tracking-tight">Waku Fruit Shop</h1>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
