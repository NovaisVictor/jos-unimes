import MapEmbed from '@/components/mapEmbed'
import { LectureList } from '@/components/lecture-list'
import { Speaker } from '@/components/speaker'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Instagram, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SubscriptionDialog } from './subscription-dialog'

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
        'Odontologia Unisanta - 2019 Residência Multiprofissional em Saúde da Família e Comunidade - 2022 Diretor Clínico da Clínica La Sorrie - 2022  Professor na Alapos - ASB e TSB - Desde 2018 Gerente Comercial Dental Parâmetro  - 2023 Sou dentista, gestor e professor, apaixonado por gestão. Há mais de 3 anos tenho uma atuação focada em precificação de serviços odontológicos. Ao longo dos últimos anos, tive o privilégio de trabalhar em diversos ramos da Odontologia, passando por vários setores, tendo uma visão 360º do mercado odontológico. A partir disso criei o método  C.O.G.I.D.I, o qual hoje consigo ajudar diversas clínicas odontológicas a alcançarem seu potencial máximo. Meu objetivo é impulsionar seu crescimento e sucesso, fornecendo estratégias sólidas, otimização de precificação e uma visão abrangente do mercado odontológico.',
    },
    {
      name: 'Nohana',
      description: 'Sensodyne',
      src: './nohana.jpg',
      curriculum:
        'Graduada em Farmácia pela Universidade Federal Rural do Rio de Janeiro Possui 5 anos de experiência no ramo da odontologia na aréa de Propaganda na multinacional GSK. Atualmente trabalha na Haleon focada em treinamentos nas Universidades do RJ, SP e BH com as marcas Sensodyne e Corega',
    },
    {
      name: 'Yuri Kalinin',
      description: 'Secretário Adjunto',
      src: './yuri.jpeg',
      curriculum:
        ': Possui graduação em Odontologia pela Universidade Metodista de São Paulo (2013) aprimoramento em Odontologia, Estomatologia e Oncologia pela Universidade Metodista de São Paulo (2016), cursou Especialização de Estomatologia pelo Centro de Estudos e Pesquisa em Estomatologia "Prof. Dr. Gilberto Marcucci" - Hospital Heliópolis (2018), Habilitação em Laserterapia pela Fundação para o Desenvolvimento Científico e Tecnológico da Odontologia - FUNDECTO USP (2022). Especialização em Gestão Pública em Saúde - Unicamp (2024). Foi professor voluntário da Universidade Metodista de São Paulo nas disciplinas de Diagnóstico Bucal e Estomatologia. Atualmente é cirurgião dentista da Prefeitura Municipal da Estância Balneária de Praia Grande, onde atua como clínico geral e estomatologista. Atua também como preceptor no estágio rotativo do Serviço de Estomatologia do Programa de Residência Multiprofissional em Saúde de Família e Comunidade da Prefeitura Municipal da Estância Balneária de Praia Grande. Foi nomeado Secretário Adjunto da Subsecretaria de Atenção à Saúde de Praia Grande, onde está atuando em Gestão em Saúde Pública desde julho de 2022, em abril de 2024 foi nomeado Secretário Adjunto de Saúde Pública, onde está atuando até então. Tem experiência na área de Odontologia, com ênfase em Estomatologia, Saúde Pública, Gestão e SUS.',
    },
    {
      name: 'Maurício Matson',
      description: 'Secretário Adjunto',
      src: './mauricio.jpeg',
      curriculum:
        'Mestre em clínica integrada pela universidade de São Paulão (FOUSP) Doutor em dentistica pela universidade de São Paulo (FOUSP) Instrutor de filosofia individually training oral prophylaxis-ITOP Implantodontista pela APCD São Bernardo do Campo',
    },
    {
      name: 'Dra Sandra Kalil',
      description: 'Secretário Adjunto',
      src: './sandra.jpeg',
      curriculum:
        'Possui graduação em Odontologia pela Universidade Santo Amaro (1988), Especialização em Odontopediatria pela UNISA (1992), Mestrado em Odontologia (Materiais Dentários) pela Universidade de São Paulo (1997) e Doutorado em Ciências Odontológicas pela Universidade de São Paulo (2001) e Pós-Doutorado em Pediatria pela UNIFESP/SP (2009). Atualmente, é professora dos Programas de Mestrado e Doutorado e Pós Doutorado Medicina em Biofotônica (Conceito 6 CAPES) e em Ciências da Reabilitação (Conceito 6 CAPES). É professora Titular-UNINOVE, professora titular da Universidade Metropolitana de Santos. Presidente da Associação Brasileira de Odontopediatria e Diretora Científica da Associação Paulista de Odontopediatria. Pesquisadora e Docente do curso de medicina com atuação nas unidades curriculares de Conhecimento Científico, Tecnológico e Inovação em Saúde, além da orientação de estudantes em iniciação científica. Tem experiência nas áreas de Fotobiomodulação (é a segunda maior produção mundial na web of science no tema);Terapia Fotodinâmica antimicrobiana (aPDT), Reabilitação do Sistema Estomatognático em crianças e adolescentes por meio de Ensaios Clínicos Controlados com ênfase em Halitose, Doença cárie, Disfunção Temporomandibular, Contatos Oclusais, Bruxismo e Postura. Odontologia com ênfase em Materiais Odontológicos, Novas Tecnologias e Mínima Intervenção, Remoção Química e Mecânica do tecido cariado, cimentos de ionômero de vidro e fitocompostos. Inventora do Papacárie e Detentora da Patente Nacional e Internacional.Orientadora de Mestrado, Doutorado e Supervisora de Pós Doutorado. Revisora de periódicos internacionais e nacionais e de diferentes órgãos de Fomento à Pesquisa (Fapesp, CNPq, Capes)',
    },
    {
      name: 'Dr Jeferson Orofino',
      description: 'Secretário Adjunto',
      src: './jeferson.jpeg',
      curriculum:
        'Cirurgião dentista pela universidade de Marília Pós graduado em endodontia pela APCD- Bauru Pós graduado em radiologia odontológica pela USF- Bragança Paulista Pós graduação em administração - Fundação Armando Alvares Penteado Diretor, sócio-proprietário, do centro radiológico Papaiz',
    },
    {
      name: 'Dra Gheyza Torres',
      description: 'Secretário Adjunto',
      src: './gheyza.jpeg',
      curriculum:
        'Professora da Pós - Graduação em Harmonização Orofacial - UNIMES Professora da Especialização em Harmonização Orofacial - ABO Professora da Especialização em Harmonização Orofacial - FACOP Mestra em Ciências e Tecnologia da Saúde - UMC Área de concentração: Utilização da Laserterapia pós preenchimento facial com Ácido Hialurônico Especialista em Harmonização Orofacial - FACOP Especialista em Ortodontia - ABO SANTOS Especialista em Odontologi a Legal - USP Perita Judicial Especialista em Prótese - APCD Auditora formada pela - USP Curso aris university',
    },
    {
      name: 'Dr Caio Capitani',
      description: 'Secretário Adjunto',
      src: './caio.jpeg',
      curriculum:
        'Formado em Odontologia pela UNISANTA Especialista em Ortodontia e Ortopedia Facial pela UNISANTA Especialista em Ciencias do Esporte pela UNIFESP Especialista em Odontologia do Esporte pela Universidade Positivo de Curitiba Diploma em Medicina do Futebol pela FIFA Mestrado em Direito da Saude pela Unisanta Dentista do Esporte - Instituto Implante Vida Dentista Parceiro do Santos Futebol Clube Membro da Camara Tecnica de Odontologia do Esporte do CROSP Sócio Fundador da MaxilGuard - Protetores Faciais Esportivos',
    },
    {
      name: 'Dr Caio Borelli Zeller',
      description: 'Secretário Adjunto',
      src: './caiob.jpeg',
      curriculum:
        'Dr. Caio Borelli Zeller - Graduado em Odontologia pela Universidade Santa Cecilia. Especialização em Periodontia na Associação Brasileira de Odontologia, Pós Graduado em Auditoria da Saúde pela Universidade de São Paulo. Presidente do Projeto Social ONG Dentista para Todos e Diretor de Comunicação da ACDBS Associação Cirurgiões Dentistas da Baixada Santista',
    },
    {
      name: 'Dr Leonardo Betolaxi',
      description: 'Secretário Adjunto',
      src: './leonardo.jpeg',
      curriculum:
        'Graduado em odontologia pela UMESP; Pós em Radiologia e Imagenologia pela SL Mandic; Pós em Estomatologia SL Mandic Tomografia computadorizada pela Fundecto-Usp Ortodontia pelo ITOO Santo André MBA Gestão de negócios da Saúde Instrutor de treinamentos comportamentais pelo instituto Napoleon Hill Prof de radiologia odontológica para implantodontia da ABO Santos',
    },
    {
      name: ' Rafaella Alencar',
      description: 'Secretário Adjunto',
      src: './rafaella.png',
      curriculum:
        'Especialista em Radiologia e Imaginologia Odontológica Especialista em Endodontia Mentorada – Dr Felipe Costa e Dr Lucas Pinheiro Radiologista responsável nas clínicas Biofx',
    },
    {
      name: 'Dra Maria Esperança',
      description: 'Secretário Adjunto',
      src: './maria.jpeg',
      curriculum:
        'Possui graduação em Odontologia pela Universidade de Mogi das Cruzes (1980) e mestrado em Odontologia pela Universidade Paulista (2002). Atualmente é professora da disciplina de Endodontia na graduação da Universidade Anhanguera de São Paulo e Especializaçào Na FUNORTE Núcleo Manaus; FAOA São Paulo e UNIMES em Santos. Atua em Consultório Particular. Tem experiência na área de Odontologia, com ênfase em Endodontia; Cirurgia endodôntica e Microscopia operatória',
    },
    {
      name: 'Dra Isabela Castro',
      description: 'Secretário Adjunto',
      src: './isabela.jpeg',
      curriculum:
        'Advogada, Conselheira Estadual da OAB SP, Presidente da Comissão Permanente das Mulheres Advogadas da OAB SP, Palestrante do CROSP e Diretora Jurídica da ACDBS',
    },
    {
      name: 'Dr Fued',
      description: 'Secretário Adjunto',
      src: './feud.jpeg',
      curriculum:
        'Diretor da "Oral Face Care" - Especialista em Cirurgia Maxilo Facial pela USP-SP - Membro Titular do Colégio Brasileiro de Cirurgia e Traumatologia Buco Maxilo Facial - Doutor em Cirurgia Maxilo Facial pela Faculdade de Odontologia da UNESP - Araraquara - Residência em Cirurgias da ATM - Pacific Clinical Research & Foundation, Estados Unidos - Coordenador do Serviço de Cirurgia e Traumatologia Buco Maxilo Facial do Hospital Casa de Saúde - Santos',
    },
  ]
  return (
    <main className="w-screen flex mx-auto p-2 md:max-w-[1200px]">
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
          <div className="space-y-4">
            <h1 className="text-2xl font-bold break-words">
              XVI JORNADA ODONTOLÓGICA DE SANTOS
            </h1>
            <span className="text-xs text-muted-foreground flex gap-2 items-center">
              <Calendar /> 21/10/2024 – 23/10/2024 - 09:00 - 22:00 GMT-3
            </span>
            <span className="text-xs text-muted-foreground flex gap-2 items-center">
              <MapPin /> Unimes - Santos/SP
            </span>
          </div>
          <div>
            <SubscriptionDialog />
          </div>
        </Card>
        <Card className="space-y-2 p-6 text-center w-full">
          <h1 className="text-2xl font-bold">
            XVI JORNADA ODONTOLOGICA DE SANTOS
          </h1>
          <p className="text-justify">
            A JOS-UNIMES (Jornada Odontológica de Santos), é um evento que
            ocorre todos os anos, desde 1978, sendo aberto à profissionais de
            toda a Baixada Santista. É um congresso que tem por objetivo e
            tradição agregar conhecimento científico, sobremaneira aos
            acadêmicos, despertando, dessa forma, o aprendizado e a amplitude da
            Odontologia, que vão além da sala de aula. Além disso, estimula-se a
            discussão e o desenvolvimento de senso crítico acerca dos avanços e
            atualidades nas diversas áreas da Odontologia. Os congressistas têm
            a oportunidade de assistir a palestras com renomados nomes da
            Odontologia nacional e também de apresentar trabalhos científicos na
            modalidade de apresentação oral. Estamos entusiasmados com a
            oportunidade de promover um evento que visa aprimorar o conhecimento
            e as habilidades dos futuros profissionais da área odontológica.
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
            <h1 className="text-2xl font-bold">Palestrantes</h1>
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
        <div className="mx-auto flex justify-center">
          <Link
            className="text-sm text-muted-foreground text-center"
            href={'/auth/sign-in'}
          >
            Admin login
          </Link>
        </div>
      </div>
    </main>
  )
}
