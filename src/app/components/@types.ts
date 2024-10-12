export type FilmeSerie = {
  id: number
  poster_path: string
  title: string
  name: string
  overview: string
}

export type FilmesSeriesPopularesResponse = {
  results: FilmeSerie[]
}

export type Jogo = {
  id: number
  competition: {
    name: string
    emblem: string
  }
  utcDate: Date
  status: string
  homeTeam: {
    name: string
    crest: string
  }
  awayTeam: {
    name: string
    crest: string
  }
  score: {
    winner: string
    fullTime: {
      home: number
      away: number
    }
  }
}

export type ResultProximosJogos = {
  matches: Jogo[]
}
