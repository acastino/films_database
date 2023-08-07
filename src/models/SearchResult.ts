import Film from "./Film";

export default interface SearchResult {
  Search: Film[];
  totalResults: number;
  Response: boolean;
}
