import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const main = async (tx) => {
    if (process.env.NODE_ENV === 'development') {
        await tx.user.createMany({
            data: [
                {
                    id: 'user123',
                    email: 'taro.sato@example.com',
                    name: 'Taro Sato',
                    createdAt: new Date('2024-08-01T12:00:00Z'),
                    updatedAt: new Date('2024-08-10T15:30:00Z'),
                },
                {
                    id: 'user456',
                    email: 'hana.yamada@example.com',
                    name: 'Hana Yamada',
                    createdAt: new Date('2023-11-25T09:15:00Z'),
                    updatedAt: new Date('2024-01-15T17:45:00Z'),
                },
            ],
        });
    }
    if (process.env.NODE_ENV === 'production') {
        console.log('production');
    }
};
const execute = () => {
    prisma
        .$transaction(main)
        .then(async () => {
        await prisma.$disconnect();
        console.log('Transaction completed successfully.');
    })
        .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
};
execute();
