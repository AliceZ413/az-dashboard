This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 开始

运行服务器（dev）

```bash
npm run dev
# or
yarn dev
```

打开http://localhost:3000

## 生成prisma client

通过已有的db生成prisma schema

```bash
npx prisma db pull
```

prisma schema同步到db

```bash
npx prisma db push
```

保存prisma schema（根目录/prisma/schema.prisma）

```bash
npx prisma generate
```

migrate（开发环境）

```bash
npx prisma migrate dev
```

migrate（生产环境）

```bash
npx prisma migrate deploy
```

studio 当前项目数据库管理页面

```bash
npx prisma studio
```

## 生成的随机NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 踩坑注意

1.  middleware.js(.ts)，应该在项目根目录，路径{root}/middleware.js(.ts)，但如果项目使用了src文件夹，应该放入src的路径上，{root}/src/middleware.js(.ts)
