import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"

export default function MentalHealthOverview() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          <CardTitle>What is Mental Health?</CardTitle>
        </div>
        <CardDescription className="text-teal-100">Understanding the foundation of mental wellbeing</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 leading-relaxed">
          Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel,
          act, handle stress, relate to others, and make choices. Mental health is important at every stage of life,
          from childhood and adolescence through adulthood.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Just as physical health contributes to our overall well-being, mental health is an essential component of a
          balanced and fulfilling life. It influences our ability to cope with life's challenges, build meaningful
          relationships, and contribute to our communities.
        </p>
      </CardContent>
    </Card>
  )
}
