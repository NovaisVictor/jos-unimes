import { Lecture } from './lecture'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function LectureList() {
  return (
    <Tabs defaultValue="day-1">
      <TabsList className="w-full justify-around">
        <TabsTrigger value="day-1">Dia 21</TabsTrigger>
        <TabsTrigger value="day-2">22/09</TabsTrigger>
        <TabsTrigger value="day-3">23/09</TabsTrigger>
      </TabsList>
      <TabsContent value="day-1" className="space-y-5 mt-4">
        {/* <Lecture name="????" time="09:00" palestrante="Laercio" /> */}
        {/* <Separator /> */}
        <Lecture
          name="RESTAURAÇÕES ESTÉTICAS: RESINA OU PORCELANA?"
          time="10:30"
          palestrante="Prof Dr Willian Gomes - apoio  Ultradent."
        />
        <Separator />
        <Lecture
          name="As possibilidades do Digital na PT"
          time="14:00"
          palestrante="Profa Dra Bárbara Romano"
        />
        <Separator />
        <Lecture
          name="Protocolos clínicos preventivos e minimamente invasivos - evidência na prática clínica"
          time="16:00"
          palestrante="Profa. Dra. Sandra Kalil Bussadori."
        />
        <Separator />
        <Lecture palestrante="Colgate" name="Colgate" time="19:00" />
        <Separator />
        <Lecture
          palestrante="Dr Leonardo Betolaxi e Rafaella Alencar - apoio Bio Fx"
          name="Tomografia Computadorizada: Um caminho para a Excelência na Odontologia."
          time="20:30"
        />
      </TabsContent>
      <TabsContent value="day-2" className="space-y-5 mt-4">
        <Lecture
          name="Dominando os 04 principais Elementos da Gestão Odontológica"
          time="09:00"
          palestrante="Dr Bruno Montezano"
        />
        <Separator />
        <Lecture name="Dra Denise" time="10:30" palestrante="Dra Denise" />
        <Separator />
        <Lecture
          palestrante="Dra Gheyza Torres"
          name="O impacto da Harmonização Orofacial nó gerenciamento do envelhecimento"
          time="14:00"
        />
        <Separator />
        {/* <Lecture palestrante="Dr Andrey Ortiz" name="?" time="16:00" /> */}
        {/* <Separator /> */}
        <Lecture
          palestrante="Dr Caio Borelli Zeller"
          name="Importância e Vantagens para os Cirurgiões Dentistas nas Entidades Associativas"
          time="18:40"
        />
        <Separator />
        <Lecture
          palestrante="Nohana Caruso com apoio Sensodyne"
          name="Hipersensibilidade Dentinária e o Papel dos Cremes Dentais Dessensibilizantes"
          time="19:00"
        />
        <Separator />
        <Lecture
          palestrante="Dr Caio Capitani"
          name="Protetores Faciais Esportivos"
          time="20:30"
        />
      </TabsContent>
      <TabsContent value="day-3" className="space-y-5 mt-4">
        <Lecture
          name="Saúde oral itop - mitos e verdades"
          time="09:00"
          palestrante="Dr Maurício Matson - apoio Curaprox"
        />
        <Separator />
        <Lecture
          name="Dra Maria Esperança"
          time="10:30"
          palestrante="Avanços tecnológicos na Endodontia"
        />
        <Separator />
        <Lecture
          palestrante="Dra Isabela Castro"
          name="Importância do Seguro de Responsabilidade Civil e Lei Geral de Proteção de Dados na Odontologia"
          time="14:00"
        />
        <Separator />
        <Lecture
          palestrante="Dr Yuri Kalinin"
          name="A Estomatologia no SUS"
          time="16:00"
        />
        <Separator />
        <Lecture
          palestrante="Jeferson Orofino Costa - apoio Lumax"
          name="Tomografia na Prática - Workshop"
          time="19:00"
        />
        <Separator />
        <Lecture
          palestrante="Dr Fued"
          name="Estratégia Terapêutica em Cirurgia Oral"
          time="20:30"
        />
      </TabsContent>
    </Tabs>
  )
}
