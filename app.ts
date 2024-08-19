import AdminJS, { locales as AdminJSLocales } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { componentLoader, Components } from './components.js'
import { PrismaClient } from '@prisma/client'
import { Database, Resource, getModelByName } from '@adminjs/prisma'

const prisma = new PrismaClient();
AdminJS.registerAdapter({ Database, Resource })

const PORT = 3000

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
        id: 'work-users',
        navigation: { name: 'User' },
        properties: {
          fullName: {
            type: 'string',
            isVisible: { list: true, filter: true, show: true, edit: true },
            isRequired: true,
            // components: {
            //   list: Components.FullNameComponent,
            // },
          },
        },
        actions: {
          new: {
            before: async (request: any) => {
              const newId = "id";
              request.payload = {
                ...request.payload,
                id: Math.random().toString(36).substring(2, 2 + 20),
                createdAt: new Date(),
                updatedAt: new Date(),
              };
              return request;
            },
          },
          edit: {
            before: async (request: any) => {
              console.log(request.payload)
              return request;
            },
            after: async (response: any, request: any, context: any) => {
              response.record.params.fullName = "佐藤太郎"
              return response;
            },
          },
          show: {
            after: async (response: any, request: any, context: any) => {
              response.record.params.fullName = "佐藤太郎";
              return response;
            },
          },
          list: {
            after: async (response: any, request: any, context: any) => {
              response.records.forEach((record: any) => {
                record.params.fullName = "佐藤太郎";
              });
              return response;
            },
          },
        },
        // listProperties: ['id', 'name', 'email', 'fullName'],
      },
    },
  ],
  locale: { 
    language: 'ja',
    availableLanguages: Object.keys(AdminJSLocales), 
  },
  // dashboard: {
  //   component: Components.MyInput,
  // },
  pages: {
    userPost: {
      label: 'User-Post',
      handler: async (request: any, response: any, context: any) => {
        const users = await prisma.user.findMany();
        const mergedData = users.map(user => ({
          ...user,
          posts: dummyPosts.filter(post => post.authorId === user.id),
        }));

        return {
          data: mergedData,
        };
      },
      component: Components.UserPostPage,
    },
  },
  componentLoader
}

const start = async () => {
  const app = express()

  const admin = new AdminJS(options)
  admin.watch()

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()