"use client";

import { useEffect, useState } from "react";
import TextDisplay from "./TextDisplay";
import Response from "./Response";
import Start from "./Start";
import End from "./End";

export default function Router({ isAlt }: Readonly<{ isAlt: boolean }>) {
  const [page, setPage] = useState<number | null>(null);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    setPage(localStorage.getItem("submitted") ? 3 : 0);
  }, []);

  const submit = async (response: string) => {
    if (startTime === null || endTime === null) {
      throw new Error("Start time or end time is null");
    }
    const reading_duration = endTime - startTime;

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        response,
        reading_duration,
        isAlt,
      }),
    });

    if (!res.ok) throw new Error("Failed to submit");

    localStorage.setItem("submitted", "true");
  };

  return (
    <>
      {page === null ? null : page === 0 ? (
        <Start
          next={() => {
            setPage(1);
            setStartTime(Date.now());
          }}
        />
      ) : page === 1 ? (
        <TextDisplay
          isAlt={isAlt}
          next={() => {
            setPage(2);
            setEndTime(Date.now());
          }}
        />
      ) : page === 2 ? (
        <Response
          submit={async (response) => {
            await submit(response);
            setPage(3);
          }}
        />
      ) : (
        <End />
      )}
    </>
  );
}
