import data from "../data.json";

const content = data;

export const trending = data.filter((c) => c.isTrending === true);
export const recommended = data.filter((c) => c.isTrending === false);
export const initiallyBookmarked = data.filter((c) => c.isBookmarked === true);
export const movies = data.filter((c) => c.category === "Movie");
export const series = data.filter((c) => c.category === "TV Series");

export default content;
