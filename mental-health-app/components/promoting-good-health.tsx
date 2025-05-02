import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Moon, Utensils, Brain, Users, HeartPulse } from "lucide-react"

export default function PromotingGoodHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Promoting Good Mental Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <HealthFactor
            icon={<Activity className="h-6 w-6 text-green-500" />}
            title="Physical Activity"
            description="Regular exercise releases endorphins, reduces stress, and improves mood."
          />
          <HealthFactor
            icon={<Moon className="h-6 w-6 text-indigo-500" />}
            title="Adequate Sleep"
            description="Quality sleep helps regulate mood and improve cognitive function."
          />
          <HealthFactor
            icon={<Utensils className="h-6 w-6 text-orange-500" />}
            title="Healthy Eating"
            description="A balanced diet provides nutrients that support brain function and mood regulation."
          />
          <HealthFactor
            icon={<Brain className="h-6 w-6 text-purple-500" />}
            title="Coping Skills"
            description="Developing healthy ways to manage stress and emotions improves resilience."
          />
          <HealthFactor
            icon={<Users className="h-6 w-6 text-blue-500" />}
            title="Social Connections"
            description="Strong relationships provide support and a sense of belonging."
          />
          <HealthFactor
            icon={<HeartPulse className="h-6 w-6 text-red-500" />}
            title="Professional Help"
            description="Seeking help when needed is a sign of strength, not weakness."
          />
        </div>
      </CardContent>
    </Card>
  )
}

function HealthFactor({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start p-4 border rounded-lg">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
