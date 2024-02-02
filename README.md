# The Varro Library: A Next.js / Open Library API project

This is a [Next.js](https://nextjs.org/) project using the [Open Library Search API](https://openlibrary.org/dev/docs/api/search).

## Setup / Running the Project

The project has been deployed to the web using [Vercel](vercel.com). To view the live site, please visit (https://nextjs-openlibrarychallenge.vercel.app/).

If you would prefer to run it locally for development, run the development server from the terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The pages auto-update as you edit the files.

## Premise and Next Steps

The goal of this project is to create a clean, user-friendly interface for searching Open Library's database of literary works.

Thus far, only basic search is currently functional. The main results page displays the book's cover, title, author, original publishing year, and number of editions.

There is still a lot that can be done on this project. As development continues, next steps include (in order of priority):

- creating detailed pages for works when selected from search results
- adding advanced search options
- continued experimentation with page layout and overall design

## Development Process

I have not worked with search functionality in my previous development experience. To overcome this, I used this [Next.js training course](https://nextjs.org/learn/dashboard-app) to teach myself how to implement search and other important components of the site. Once I had a handle on the material, I adapted the site to use the Open Library API instead of SQL queries from a private database to retrieve search results. Once I finally got that functionality up and running, I polished the design to clearly and concisely display data to the user. I also customized the overall styling of the site to fit the theme of the project. The design process included sketching possible layouts on paper, like the one shown below:
![Rough sketch of table design](https://github.com/AlisonRampton/nextjs-openlibrarychallenge/blob/main/public/IMG1697.jpg?raw=true)

Given time constraints, I am fairly pleased with the state of the project, at least as a minimum viable product. If provided more time, I would like to finish developing core features like detailed works pages and advanced search capabilities. I would also like to further develop the overall look and feel of the site.
