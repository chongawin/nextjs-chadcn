interface TechStackItemProps {
  name: string
  icon: string
  color: string
}

export const TechStackItem = ({ name, icon, color }: TechStackItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-center transition-all hover:scale-105 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity group-hover:opacity-10`}
      ></div>
      <div className="relative">
        <div className="mb-2 text-3xl">{icon}</div>
        <div className="text-sm font-semibold text-slate-900 dark:text-white">{name}</div>
      </div>
    </div>
  )
}
