import Image from "next/image";
import { ThemeToggle } from "./Components/Context/ThemeToggle";

export default function Home() {
  return (
    <>
      <div>
        
        <h1 className="text-blue-800 dark:text-red-500 font-mono">Hello World</h1>

        {/* testing */}
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle/>
        </div>

      </div>
    </>
  );
}
