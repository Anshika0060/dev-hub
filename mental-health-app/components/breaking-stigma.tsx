import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export default function BreakingStigma() {
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          <CardTitle>Breaking the Stigma</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 leading-relaxed">
          Despite growing awareness, mental health stigma remains a significant barrier to treatment. Stigma can lead to
          discrimination, isolation, and reluctance to seek help.
        </p>

        <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h3 className="font-medium text-purple-700 mb-2">How to Help Break the Stigma:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Talk openly about mental health</li>
            <li>Educate yourself and others about mental health conditions</li>
            <li>Be conscious of language (avoid terms like "crazy" or "psycho")</li>
            <li>Show compassion for those with mental health challenges</li>
            <li>Treat mental health with the same importance as physical health</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-700 italic">
          "The way we talk about mental health affects the way we think about it. By changing our language, we can
          change attitudes and reduce stigma."
        </p>
      </CardContent>
    </Card>
  )
}
