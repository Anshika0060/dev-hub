import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommonConditions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Common Mental Health Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="depression" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="depression">Depression</TabsTrigger>
            <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
            <TabsTrigger value="bipolar">Bipolar</TabsTrigger>
            <TabsTrigger value="ptsd">PTSD</TabsTrigger>
            <TabsTrigger value="schizophrenia">Schizophrenia</TabsTrigger>
          </TabsList>
          <TabsContent value="depression" className="p-4">
            <h3 className="text-lg font-medium mb-2">Depression</h3>
            <p className="text-gray-700">
              Depression is characterized by persistent feelings of sadness, loss of interest in activities, and can
              lead to a variety of emotional and physical problems. It can affect how you feel, think, and handle daily
              activities.
            </p>
          </TabsContent>
          <TabsContent value="anxiety" className="p-4">
            <h3 className="text-lg font-medium mb-2">Anxiety Disorders</h3>
            <p className="text-gray-700">
              Anxiety disorders involve excessive worry, fear, or nervousness that can interfere with daily activities.
              Types include generalized anxiety disorder, panic disorder, and various phobia-related disorders.
            </p>
          </TabsContent>
          <TabsContent value="bipolar" className="p-4">
            <h3 className="text-lg font-medium mb-2">Bipolar Disorder</h3>
            <p className="text-gray-700">
              Bipolar disorder causes unusual shifts in mood, energy, activity levels, and the ability to carry out
              day-to-day tasks. It includes periods of extremely elevated mood (mania) and depressive episodes.
            </p>
          </TabsContent>
          <TabsContent value="ptsd" className="p-4">
            <h3 className="text-lg font-medium mb-2">Post-Traumatic Stress Disorder (PTSD)</h3>
            <p className="text-gray-700">
              PTSD can develop after experiencing or witnessing a traumatic event. Symptoms may include flashbacks,
              nightmares, severe anxiety, and uncontrollable thoughts about the event.
            </p>
          </TabsContent>
          <TabsContent value="schizophrenia" className="p-4">
            <h3 className="text-lg font-medium mb-2">Schizophrenia</h3>
            <p className="text-gray-700">
              Schizophrenia is a serious mental disorder that affects how a person thinks, feels, and behaves. People
              with schizophrenia may seem like they have lost touch with reality, experiencing hallucinations,
              delusions, and extremely disordered thinking.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
