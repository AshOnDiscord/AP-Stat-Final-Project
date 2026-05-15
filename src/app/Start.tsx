import { ArrowRight } from "lucide-react";

export default function Start({ next }: Readonly<{ next: () => void }>) {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <main className="flex flex-col gap-2 items-center text-center">
        <h1 className="text-2xl font-medium">AP Stats Project</h1>
        <h2 className="w-[25ch] text-gray-700">
          Takes about 3–5 minutes. Click begin when you're ready.
        </h2>
        <button
          className="group mt-4 flex items-center gap-1 bg-black text-white text-semibold px-6 py-2 rounded-lg cursor-pointer"
          onClick={next}
          type="button"
        >
          Begin{" "}
          <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all" />
        </button>
        <p className="text-sm text-gray-500 mt-2">Responses are anonymous.</p>
      </main>
    </div>
  );
}
