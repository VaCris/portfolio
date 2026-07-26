export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-zinc-800 border-t-foreground" />
        <p className="text-sm font-mono text-zinc-600 uppercase tracking-widest">
          Cargando...
        </p>
      </div>
    </div>
  );
}