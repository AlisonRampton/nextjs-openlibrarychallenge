import { Work } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchIndividualWork(workID: string): Promise<Work> {
  noStore();
  const workUrl = `https://openlibrary.org${workID}.json`;
  let resultWork: Work;
  try {
    let response = await fetch(workUrl).then((response) => response.json());
    resultWork = response.map(
      (element: {
        author_name: any;
        author_key: any;
        contributor: any;
        edition_count: any;
        edition_key: any;
        first_publish_year: any;
        has_fulltext: any;
        isbn: any;
        key: any;
        language: any;
        publish_date: any;
        publish_place: any;
        publish_year: any;
        publisher: any;
        title: any;
      }) => ({
        author_name: element.author_name,
        author_key: element.author_key,
        contributor: element.contributor,
        edition_count: element.edition_count,
        edition_key: element.edition_key,
        first_publish_year: element.first_publish_year,
        has_fulltext: element.has_fulltext,
        isbn: element.isbn,
        key: element.key,
        language: element.language,
        publish_date: element.publish_date,
        publish_place: element.publish_place,
        publish_year: element.publish_year,
        publisher: element.publisher,
        title: element.title,
      })
    );
  } catch (error) {
    console.error("Fetch Error: ", error);
    throw new Error("Failed to fetch work");
  }
  return resultWork;
}

export async function fetchWorks(query: string): Promise<Work[]> {
  noStore();
  const fixQuery = query.replaceAll(" ", "+");
  const searchUrl = `https://openlibrary.org/search.json?q=${fixQuery}`;
  console.log(searchUrl);
  let resultWorks: Work[];
  try {
    let response = await fetch(searchUrl).then((response) => response.json());

    resultWorks = response.docs.map(
      (element: {
        author_name: any;
        author_key: any;
        contributor: any;
        edition_count: any;
        edition_key: any;
        first_publish_year: any;
        has_fulltext: any;
        isbn: any;
        key: any;
        language: any;
        publish_date: any;
        publish_place: any;
        publish_year: any;
        publisher: any;
        title: any;
      }) => ({
        author_name: element.author_name,
        author_key: element.author_key,
        contributor: element.contributor,
        edition_count: element.edition_count,
        edition_key: element.edition_key,
        first_publish_year: element.first_publish_year,
        has_fulltext: element.has_fulltext,
        isbn: element.isbn,
        key: element.key,
        language: element.language,
        publish_date: element.publish_date,
        publish_place: element.publish_place,
        publish_year: element.publish_year,
        publisher: element.publisher,
        title: element.title,
      })
    );
  } catch (error) {
    console.error("Fetch Error: ", error);
    throw new Error("Failed to fetch works");
  }

  return resultWorks;
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredWorks(
  query: string,
  currentPage: number
): Promise<Work[]> {
  noStore();
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const works = await fetchWorks(
      `${query}&limit=${ITEMS_PER_PAGE}&page=${currentPage}`
    );

    return works;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch works.");
  }
}

export async function fetchWorksPages(query: string) {
  noStore();
  try {
    const count = (await fetchWorks(query)).length;

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    console.error(query);
    throw new Error("Failed to fetch total number of works.");
  }
}
