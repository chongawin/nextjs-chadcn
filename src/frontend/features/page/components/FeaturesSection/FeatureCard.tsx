interface FeatureCardProps {
  icon: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export const FeatureCard = ({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10 blur-2xl transition-all group-hover:opacity-20`}
      ></div>
      <div className="relative">
        <div
          className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-2xl shadow-lg`}
        >
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  )
}
