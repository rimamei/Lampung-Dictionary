# Lampung - Indonesia Dictionary

Welcome to the Lampung Dictionary repository! This project is about providing a digital dictionary of the Lampung language interface and api.

### Technology used

- NextJS
- Prisma
- Typescript

## Installation

### Clone

```
$ git clone https://github.com/rimamei/kamus-bahasa-lampung-indonesia.git
$ cd kamus-bahasa-lampung-indonesia
$ npm install
```

## Create Environment Variable

```
DATABASE_URL=YOUR_MONGO_URI
```

### Prisma

```
$ npx prisma generate
$ npx prisma db push
$ npx studio prisma
```

Add translation data by adding indonesia2lampung.json on seed folder to your database

### Start Development Server

```
$ npm run dev
```

## API Endpoint

The Unofficial Lampung - Indonesia API. Revived from [meizano/lampung](https://github.com/meizano/lampung)

## BASE URL
If you want to integrate without making an api then you can use this endpoint.

https://kamus-bahasa-lampung.vercel.app/

### Translation

| No  | HTTP Method | URI                                           | Operation                                               |
| --- | ----------- | --------------------------------------------- | ------------------------------------------------------- |
| 1   | GET         | /api/translations?text={text}&lang={lang}     | Get all data by text (string) and lang ("id" or "lpg") |

### Example

1. https://kamus-bahasa-lampung.vercel.app/api/translations?text=saya&lang=id

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

1. Create your Feature Branch `git checkout -b [feature]`
2. Commit your Changes `git commit -m 'Add some feature'`
3. Push to the Branch `git push origin [feature]`
4. Open a Pull Request

---

Copyright © 2023 [Rima Mei Handayani](https://github.com/rimamei/)
