"use client";

import { useState } from "react";
import TextDisplay from "./TextDisplay";

export default function Router({ group }: Readonly<{ group: string }>) {
  const [page, setPage] = useState(0);
  return (
    <>
      {page === 0 ? (
        <TextDisplay group={group} next={() => setPage(1)} />
      ) : (
        <div>Next page</div>
      )}
    </>
  );
}
