"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Phone, BookOpen, Globe } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function ResourcesSection() {
  const [expanded, setExpanded] = useState(false)
  const isMobile = useMobile()

  const resources = [
    {
      name: "National Alliance on Mental Illness (NAMI)",
      description:
        "The nation's largest grassroots mental health organization dedicated to building better lives for Americans affected by mental illness.",
      link: "https://www.nami.org",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      name: "Mental Health America",
      description:
        "The nation's leading community-based nonprofit dedicated to addressing the needs of those living with mental illness.",
      link: "https://www.mhanational.org",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      name: "National Suicide Prevention Lifeline",
      description:
        "A national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress.",
      link: "tel:988",
      phone: "988",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      name: "Psychology Today",
      description: "Find a therapist, counselor, or mental health provider that meets your needs.",
      link: "https://www.psychologytoday.com/us/therapists",
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  const displayedResources = expanded || !isMobile ? resources : resources.slice(0, 2)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mental Health Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {displayedResources.map((resource, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1 bg-teal-100 p-2 rounded-full text-teal-600">{resource.icon}</div>
                <div>
                  <h3 className="font-medium mb-1">{resource.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-teal-600 hover:text-teal-800"
                  >
                    {resource.phone ? `Call ${resource.phone}` : "Visit Website"}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {isMobile && resources.length > 2 && (
            <Button variant="outline" onClick={() => setExpanded(!expanded)} className="mt-2">
              {expanded ? "Show Less" : "Show More Resources"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
