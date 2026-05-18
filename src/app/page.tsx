import { supabase } from "@/lib/supabase";
import Router from "./Router";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [{ count: count1, error: e1 }, { count: count2, error: e2 }] =
    await Promise.all([
      supabase
        .from("responses")
        .select("*", { count: "exact", head: true })
        .eq("isAlt", false),
      supabase
        .from("responses")
        .select("*", { count: "exact", head: true })
        .eq("isAlt", true),
    ]);
  if (e1 || e2 || count1 === null || count2 === null) {
    throw new Error("Failed to fetch counts from Supabase");
  }
  const isAlt = count2 === count1 ? Math.random() < 0.5 : count2 < count1;
  console.log(
    `Group A count: ${count1}, Group B count: ${count2}, Assigned group: ${isAlt ? "B" : "A"}`,
  );
  return <Router isAlt={isAlt} />;
}
