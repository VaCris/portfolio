"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
          <p className="text-zinc-400 mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="rounded-lg bg-foreground text-black px-6 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-white"
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}