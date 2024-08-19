import AdminJS from 'adminjs';
import { locales as AdminJSLocales } from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import { componentLoader, Components } from './components.js';
import { PrismaClient } from '@prisma/client';
import { Database, Resource, getModelByName } from '@adminjs/prisma';
const prisma = new PrismaClient();
AdminJS.registerAdapter({ Database, Resource });
const PORT = 3000;
const dummyPosts = [
    { id: 1, title: 'Post 1', content: 'Content 1', authorId: "user123" },
    { id: 2, title: 'Post 2', content: 'Content 2', authorId: "user123" },
    { id: 3, title: 'Post 3', content: 'Content 3', authorId: "user456" },
];
const options = {
    resources: [
        {
            resource: { model: getModelByName('User'), client: prisma },
            options: {
                properties: {
                    fullName: {
                        type: 'string',
                        isVisible: { list: true, filter: true, show: true, edit: true },
                        // components: {
                        //   list: Components.FullNameComponent, // 一覧表示で使用
                        //   show: Components.FullNameComponent, // 詳細表示で使用
                        // },
                    },
                },
                actions: {
                    show: {
                        after: async (response, request, context) => {
                            const fullName = "佐藤太郎";
                            response.record.params.fullName = fullName;
                            return response;
                        },
                    },
                },
                // listProperties: ['id', 'name', 'email', 'fullName'], // 仮想フィールドを含める
                // showProperties: ['id', 'name', 'email', 'fullName'],
            },
        },
    ],
    locale: {
        language: 'ja', // default language of application (also fallback)
        availableLanguages: Object.keys(AdminJSLocales),
    },
    // dashboard: {
    //   component: Components.MyInput,
    // },
    pages: {
        userPost: {
            label: 'User-Post',
            handler: async (request, response, context) => {
                const users = await prisma.user.findMany();
                const mergedData = users.map(user => ({
                    ...user,
                    posts: dummyPosts.filter(post => post.authorId === user.id),
                }));
                console.log(mergedData);
                return {
                    data: mergedData,
                };
            },
            component: Components.UserPostPage,
        },
    },
    componentLoader
};
const start = async () => {
    const app = express();
    const admin = new AdminJS(options);
    admin.watch();
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);
    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
    });
};
start();
