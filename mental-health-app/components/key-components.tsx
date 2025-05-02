import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Users } from "lucide-react"

export default function KeyComponents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Components of Mental Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <ComponentCard
            icon={<Heart className="h-8 w-8 text-rose-500" />}
            title="Emotional Well-being"
            description="The ability to manage emotions effectively, recognize feelings, and express them in healthy ways."
          />
          <ComponentCard
            icon={<Brain className="h-8 w-8 text-violet-500" />}
            title="Psychological Well-being"
            description="Having a positive self-perception, purpose in life, and the ability to manage life's challenges."
          />
          <ComponentCard
            icon={<Users className="h-8 w-8 text-blue-500" />}
            title="Social Well-being"
            description="The ability to form and maintain healthy relationships, communicate effectively, and feel connected."
          />
        </div>
      </CardContent>
    </Card>
  )
}

function ComponentCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
