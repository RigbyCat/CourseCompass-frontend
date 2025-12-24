import Image from "next/image";
import { fetchBackendStatus } from "@/services/api";

export default async function Home() {
  const status = await fetchBackendStatus();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <p>
          Backend status:{" "}
          <span className={status.message ? "text-green-500" : "text-red-500"}>
            {status.message ? "✓ Online" : "✗ Offline"}
          </span>
        </p>
      </main>
    </div>
  );
}