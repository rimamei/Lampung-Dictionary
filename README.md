# Lampung - Indonesia Dictionary

Welcome to the Lampung Dictionary repository! This project is about providing a digital dictionary of the Lampung language. Explore the unique linguistic heritage of this region in just a few clicks.

### Technology used

- NextJS
- Prisma
- Typescript

## Installation

### Clone

```
$ git clone https://github.com/rimamei/Lampung-Dictionary.git
$ cd Lampung-Dictionary
$ npm install
```

## Create Environment Variable

```
DATABASE_URL=YOUR_MONGO_URI
NEXT_PUBLIC_API=YOUR_API
```

### Prisma

```
$ npx prisma generate
$ npx prisma db push
$ npx studio prisma
```

### Start Development Server

```
$ npm run dev
```

## API Endpoint

The Unofficial Lampung - Indonesia API. Revived from [meizano/lampung](https://github.com/meizano/lampung)

## BASE URL

https://lampung-dictionary.vercel.app

### Translation

| No  | HTTP Method | URI                                           | Operation                                               |
| --- | ----------- | --------------------------------------------- | ------------------------------------------------------- |
| 1   | GET         | /api/translations?search={search}&type={type} | Get all data by search (string) or type ("id" or "lpg") |

### Example

1. https://lampung-dictionary.vercel.app/api/translations?search=search&type=id

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

1. Create your Feature Branch `git checkout -b [feature]`
2. Commit your Changes `git commit -m 'Add some feature'`
3. Push to the Branch `git push origin [feature]`
4. Open a Pull Request

---

Copyright © 2023 [Rima Mei Handayani](https://github.com/rimamei/)
