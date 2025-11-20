import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import WordDisplay from "@/components/word-display";
import Quiz from "@/components/quiz";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <WordDisplay />
      <Quiz />
    </main>
  );
}
