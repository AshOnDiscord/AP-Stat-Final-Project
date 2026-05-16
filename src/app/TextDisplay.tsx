import { ArrowRight } from "lucide-react";

export default function TextDisplay({
  isAlt,
  next,
}: Readonly<{ isAlt: boolean; next: () => void }>) {
  const text = `On a quiet morning, several people visited the local library to read, study, and borrow books. A student worked on homework at one table while another visitor looked through a magazine nearby. The library was calm and quiet, and people spoke softly as they moved between the shelves. Outside, a few people walked past on their way to work and school.`;

  const font = isAlt ? "font-fascinate" : "font-atkinson";
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <main className="flex flex-col gap-8 items-start">
        <div className="flex flex-col gaps-2">
          <h1 className="text-xl font-medium">Read the passage</h1>
          <h2>Read the passage below, and click done when finished.</h2>
        </div>
        <div
          className={`w-[45ch] rounded-lg px-8 py-6 bg-white border border-gray-200 text-lg flex flex-col gap-4`}
        >
          <h1 className="uppercase text-gray-500 text-sm">Passage</h1>
          <p className={`${font} text-lg`}>{text}</p>
        </div>
        <button
          className="group border border-gray-300 px-4 py-1 rounded-lg cursor-pointer flex gap-1 items-center hover:bg-gray-100 transition"
          onClick={next}
          type="button"
        >
          Done reading{" "}
          <ArrowRight className="w-4 h-4 group-hover:ml-1 transition-all" />
        </button>
      </main>
    </div>
  );
}
