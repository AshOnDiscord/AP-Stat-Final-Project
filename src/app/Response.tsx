import { Check } from "lucide-react";
import { useState } from "react";

export default function Response({
  submit,
}: Readonly<{ submit: (response: string) => void }>) {
  const [response, setResponse] = useState("");

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <main className="flex flex-col gap-8 items-start">
        <div className="flex flex-col gaps-2">
          <h1 className="text-xl font-medium">What did you read?</h1>
          <h2>In your own words, describe what you read.</h2>
        </div>
        <textarea
          className={`w-[45ch] rounded-lg px-4 py-3 bg-white border border-gray-200 text-lg flex flex-col gap-4`}
          placeholder="The passage was about..."
          rows={7}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        ></textarea>
        <button
          className="border border-gray-300 px-4 py-1 rounded-lg cursor-pointer disabled:cursor-default disabled:text-gray-500 disabled:border-gray-200 transition hover:bg-gray-100 disabled:hover:bg-gray-50 flex items-center gap-1"
          onClick={() => submit(response)}
          disabled={response.trim().length < 10}
        >
          Submit
          <Check className="w-4 h-4" />
        </button>
      </main>
    </div>
  );
}
