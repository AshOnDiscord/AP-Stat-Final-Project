"use client";

import { useState } from "react";
import TextDisplay from "./TextDisplay";
import Response from "./Response";
import Start from "./Start";
import End from "./End";

export default function Router({ group }: Readonly<{ group: string }>) {
  const [page, setPage] = useState(0);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  return (
    <>
      {page === 0 ? (
        <Start
          next={() => {
            setPage(1);
            setStartTime(Date.now());
          }}
        />
      ) : page === 1 ? (
        <TextDisplay
          group={group}
          next={() => {
            setPage(2);
            setEndTime(Date.now());
          }}
        />
      ) : page === 2 ? (
        <Response
          submit={(response) => {
            setPage(3);
            console.log(
              response,
              +(((endTime ?? 0) - (startTime ?? 0)) / 1000).toFixed(2),
            );
          }}
        />
      ) : (
        <End />
      )}
    </>
  );
}
