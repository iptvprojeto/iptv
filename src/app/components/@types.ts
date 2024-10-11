export type FilmeSerie = {
  id: number
  poster_path: string
  title: string
  name: string
}

export type FilmesSeriesPopularesResponse = {
  results: FilmeSerie[]
}
