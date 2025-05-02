import type { Metadata } from "next"
import MentalHealthOverview from "@/components/mental-health-overview"
import KeyComponents from "@/components/key-components"
import CommonConditions from "@/components/common-conditions"
import PromotingGoodHealth from "@/components/promoting-good-health"
import BreakingStigma from "@/components/breaking-stigma"
import ResourcesSection from "@/components/resources-section"

export const metadata: Metadata = {
  title: "Mental Health Information",
  description:
    "A comprehensive overview of mental health, its components, conditions, and ways to promote good mental health.",
}

export default function MentalHealthPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8">Mental Health: An Overview</h1>

      <div className="grid gap-8 md:gap-12">
        <MentalHealthOverview />
        <KeyComponents />
        <CommonConditions />
        <PromotingGoodHealth />
        <BreakingStigma />
        <ResourcesSection />
      </div>
    </main>
  )
}
