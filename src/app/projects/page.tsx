import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import project1 from './image-1.jpeg'
import project2 from './image-2.jpeg'

export default function Projects() {
  return (
    <main className="w-screen flex mx-auto p-2 md:max-w-[1200px]">
      <div className="w-full px-2 break-words space-y-6 py-4">
        <section className="justify-center flex flex-col items-center gap-4 w-full">
          <div className="bg-secondary flex justify-end rounded-md w-full">
            <Button variant={'link'} asChild>
              <Link href={'/'}>Home</Link>
            </Button>
          </div>

          <Image
            src={'/logo.png'}
            className="size-52"
            width={400}
            height={100}
            alt="logo"
          />
        </section>

        <div className="flex flex-col space-y-12">
          <h1 className="text-2xl text-center">Projetos</h1>
          <div>
            <Image src={project1} alt="" />
          </div>
          <div>
            <Image src={project2} alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
