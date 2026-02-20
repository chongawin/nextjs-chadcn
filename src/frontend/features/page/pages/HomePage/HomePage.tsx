'use client'

import {
  HeroSection,
  FeaturesSection,
  TechStackSection,
  ProjectStructureSection,
} from '../../components'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center justify-center gap-12">
          <HeroSection />
          <FeaturesSection />
          <TechStackSection />
          <ProjectStructureSection />
        </div>
      </div>
    </div>
  )
}

export default HomePage
