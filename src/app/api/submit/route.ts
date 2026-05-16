// app/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import z from "zod";

export const runtime = "edge";

const schema = z.object({
  response: z.string().min(10),
  reading_duration: z.number().int().positive(),
  isAlt: z.boolean(),
});

export async function POST(req: NextRequest) {
  const parsed = schema.safeParse(await req.json());

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const { response, reading_duration, isAlt } = parsed.data;

  const { error } = await supabase.from("responses").insert({
    response,
    reading_duration,
    isAlt,
  });

  if (error) {
    return NextResponse.json({ error: "DB insert failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
