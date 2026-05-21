export function SkillMeter({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between text-sm font-medium text-white">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
