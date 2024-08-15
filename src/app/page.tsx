import MapEmbed from '@/components/mapEmbed'
import { LectureList } from '@/components/lecture-list'
import { Speaker } from '@/components/speaker'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Instagram, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SubscriptionDialog } from '@/components/subscription-dialog'

export default function Home() {
  const speakers = [
    {
      name: 'Bárbara Romano',
      description: 'Mestre em Prótese Dentária.',
      src: './barbara.jpg',
      curriculum:
        'Mestranda em Prótese Dentária. Possui especialização também em Prótese Dentária e graduação em Odontologia pela Universidade Santa Cecília (2017), ganhadora do Prêmio de Melhor aluna da Turma XVII e Prêmio Lima de Ouro da Disciplina de Endodontia nos anos de 2016 e 2017. Atualmente é professora na graduação em Odontologia da Universidade Anhanguera de Jundiaí e ministra cursos de pós graduação com foco em Prótese Dentária. Atua em consultório odontológico próprio, em experiência na área de Odontologia, com ênfase em Prótese Dentária. Fundadora da comunidade Domine Prótese.',
    },
    {
      name: 'Willian Gomes',
      description: 'Odontologia Estética',
      src: './willian.jpg',
      curriculum:
        'Mais de 20 anos de Odontologia Estética - tendo iniciado como Protético no ano de 1998 Fundador da Imersão e Mentoria SMILE SCULPTOR e RESIN SCULPTOR @cursosmilesculptor_ Especialista em Reabilitação Oral e Estética (Prótese, Implante e Cirurgia  Periodontal) - Faculdade São Leopoldo Mandic - 2024 Graduado em Odontologia- Universidade Santa Cecília - 2018 Fundador do Laboratório Axial @lab.axial Fundador da clínica Spazio Riso @spazio_riso',
    },
    {
      name: 'Bruno Montezano',
      description: 'Dentista, Gestor e Professor,',
      src: './bruno.jpg',
      curriculum:
        'Sou dentista, gestor e professor, apaixonado por gestão. Há mais de 3 anos tenho uma atuação focada em precificação de serviços odontológicos. Ao longo dos últimos anos, tive o privilégio de trabalhar em diversos ramos da Odontologia, passando por vários setores, tendo uma visão 360º do mercado odontológico. A partir disso criei o método  C.O.G.I.D.I, o qual hoje consigo ajudar diversas clínicas odontológicas a alcançarem seu potencial máximo. Meu objetivo é impulsionar seu crescimento e sucesso, fornecendo estratégias sólidas, otimização de precificação e uma visão abrangente do mercado odontológico.',
    },
    {
      name: 'Nohana',
      description: 'Sensodyne',
      src: './nohana.jpg',
      curriculum:
        'Graduada em Farmácia pela Universidade Federal Rural do Rio de Janeiro Possui 5 anos de experiência no ramo da odontologia na aréa de Propaganda na multinacional GSK. Atualmente trabalha na Haleon focada em treinamentos nas Universidades do RJ, SP e BH com as marcas Sensodyne e Corega',
    },
  ]
  return (
    <main className="w-screen flex justify-center">
      <div className="w-full px-2 break-words space-y-6 py-4">
        <section className="justify-center flex w-full">
          <Image
            src={'/logo.png'}
            className="size-52"
            width={400}
            height={100}
            alt="logo"
          />
        </section>
        <Card className="flex items-center justify-between p-6 flex-wrap gap-2 w-full">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold break-words">
              XV JORNADA ODONTOLÓGICA DE SANTOS
            </h1>
            <span className="text-xs text-muted-foreground flex gap-2 items-center">
              <Calendar /> 23/10/2023 – 25/10/2023 - 09:00 - 22:00 GMT-3
            </span>
            <span className="text-xs text-muted-foreground flex gap-2 items-center">
              <MapPin /> 23/10/2023 – 25/10/2023 - 09:00 - 22:00 GMT-3
            </span>
          </div>
          <div>
            <SubscriptionDialog />
          </div>
        </Card>
        <Card className="space-y-2 p-6 text-center w-full">
          <h1 className="text-2xl font-bold">
            XV JORNADA ODONTOLOGICA DE SANTOS
          </h1>
          <p>
            A finalidade da JOS é agregar conhecimento científico, sobremaneira
            aos acadêmicos, despertando, desta forma, o interesse por assuntos
            que vão além da sala de aula. Além de gerar discussões sobre o
            futuro da Odontologia e suas atualidades. Os congressistas tem a
            oportunidade de assistir a palestras com renomados nomes da
            Odontologia nacional e internacional e também de apresentar
            trabalhos científicos nas modalidades painel e apresentação oral.
            Todos os anos novas tecnologias surgem no mercado de trabalho
            otimizando as práticas do Cirurgião Dentista e possibilitando uma
            reabilitação mais eficaz e resiliente ao paciente. Além do viés
            científico, também atuamos na frente social, oferecendo atendimento
            gratuito à população, diminuindo, portanto, as filas do Sistema
            Único de Saúde.
          </p>
        </Card>

        <Card className="space-y-8 flex flex-col items-center py-6 w-full">
          <div>
            <h1 className="text-2xl font-bold">Temas das palestras</h1>
          </div>
          <div className="w-full p-2">
            <LectureList />
          </div>
        </Card>

        <Card className="space-y-8 flex flex-col items-center p-6 w-full">
          <div>
            <h1 className="text-2xl font-bold">Speakers</h1>
          </div>
          <div className="flex flex-wrap gap-20 justify-center w-2/3">
            {speakers.map((speaker) => {
              return <Speaker key={speaker.name} {...speaker} />
            })}
          </div>
        </Card>
        <Card className="space-y-8 flex flex-col items-center p-6 w-full">
          <div>
            <h1 className="text-2xl font-bold">Patrionicadores JOS 2024</h1>
          </div>
        </Card>
        <MapEmbed />
        <Card className="space-y-8 flex flex-col items-center p-6 w-full">
          <div>
            <Image
              src={'/logo.png'}
              className="size-52"
              width={400}
              height={100}
              alt="logo"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Organizado por</h1>
            <p>Comissão Unimes</p>
          </div>
          <div>
            <Button variant={'outline'} asChild>
              <Link
                href={
                  'https://www.instagram.com/josunimes?igsh=MThlNHZjcHVyYzZpdg=='
                }
                className="uppercase gap-2"
              >
                <Instagram /> Instagram
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}
