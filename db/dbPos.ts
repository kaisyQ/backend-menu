import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()

class DBPos {
    create = async (object: Object) => {
        const tmpCrt = await prisma.categories.create({ data: object })
    }

    delete = async (id: number) => {
        const tmpDlt = await prisma.categories.delete({ where: { id: id } })
    }

    getAll = async () => {
        const allCategories = await prisma.categories.findMany()
        return allCategories
    }
}

export default DBPos

