import { ArrowRight } from "lucide-react";

export default function Start({ next }: Readonly<{ next: () => void }>) {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <main className="flex flex-col gap-8 items-start">
        <button
          className="group border border-gray-300 px-8 py-4 flex gap-2 items-center rounded-lg cursor-pointer text-2xl font-semibold bg-white hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-900 shadow-indigo-500/10 hover:shadow-lg transition"
          onClick={next}
        >
          Start{" "}
          <ArrowRight className="w-0 h-6 group-hover:w-6 transition-all" />
        </button>
      </main>
    </div>
  );
}
