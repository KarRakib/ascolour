const { PrismaClient } = require("@prisma/client")

const prismaClientSigleton = () =>{
    return new PrismaClient()
}
if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSigleton();
}
const prisma = global.prismaGlobal;

export default prisma;

if (process.env.NODE_ENV !== 'production') {
    global.prismaGlobal = prisma;
}