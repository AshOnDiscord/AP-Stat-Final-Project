"use client";

import TextDisplay from "./TextDisplay";

export default function Router({ group }: Readonly<{ group: string }>) {
  return <TextDisplay group={group} />;
}
