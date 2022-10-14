export interface OMDbResult {
  Response: string
  Search: Search[]
  totalResults: string
}

export interface Search {
  Poster: string
  Title: string
  Type: Type
  Year: string
  imdbID: string
}

export enum Type {
  Movie = 'movie'
}
