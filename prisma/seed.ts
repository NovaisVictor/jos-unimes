import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
import { env } from 'process'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.deleteMany()
  // await prisma.viewer.deleteMany()
  const passwordHash = await hash(env.PASSWORD!, 1)

  await prisma.user.create({
    data: {
      name: 'Jos Unimes',
      username: 'comissaounimes',
      passwordHash,
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
})
