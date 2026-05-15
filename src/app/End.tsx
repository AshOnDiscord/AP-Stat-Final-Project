import { Check } from "lucide-react";

export default function End() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <main className="flex flex-col gap-2 items-center text-center">
        <div className="border border-slate-200 rounded-full w-14 h-14 items-center justify-center flex mb-4">
          <Check className="w-6 h-6 text-gray-700" />
        </div>
        <h1 className="text-2xl font-medium">You're all done</h1>
        <h2 className="w-[25ch] text-gray-700">
          Thank you for participating. Your response has been recorded.
        </h2>
        <p className="text-sm text-gray-500 mt-6">You may close this tab.</p>
      </main>
    </div>
  );
}
