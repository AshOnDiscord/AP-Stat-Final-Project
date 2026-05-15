import Router from "./Router";

export default async function Home({
  searchParams,
}: Readonly<{ searchParams: Promise<{ group: string }> }>) {
  const params = await searchParams;
  return <Router group={params.group} />;
}
