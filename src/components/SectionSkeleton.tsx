export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="py-28">
      <div className="container">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="h-3 w-24 rounded-full bg-muted animate-pulse" />
          <div className="h-8 w-80 rounded-lg bg-muted animate-pulse" />
          <div className="h-4 w-64 rounded-lg bg-muted/60 animate-pulse" />
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-${rows} gap-5 max-w-6xl mx-auto`}>
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-7">
              <div className="w-14 h-14 rounded-2xl bg-muted animate-pulse mb-5" />
              <div className="h-5 w-32 rounded bg-muted animate-pulse mb-3" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-muted/60 animate-pulse" />
                <div className="h-3 w-3/4 rounded bg-muted/60 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
