import { Lecture } from './lecture'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function LectureList() {
  return (
    <Tabs defaultValue="day-1">
      <TabsList className="w-full justify-around">
        <TabsTrigger value="day-1">Dia 1</TabsTrigger>
        <TabsTrigger value="day-2">Dia 2</TabsTrigger>
        <TabsTrigger value="day-3">Dia 3</TabsTrigger>
      </TabsList>
      <TabsContent value="day-1" className="space-y-5 mt-4">
        <Lecture
          name="Dominando os 04 principais Elementos da Gestão Odontológica"
          time="09:00"
        />
        <Separator />
        <Lecture
          name="Hipersensibilidade Dentinária e o Papel dos Cremes Dentais Dessensibilizantes"
          time="09:00"
        />
      </TabsContent>
      <TabsContent value="day-2">Change your password here.</TabsContent>
      <TabsContent value="day-3">Change your password here.</TabsContent>
    </Tabs>
  )
}
