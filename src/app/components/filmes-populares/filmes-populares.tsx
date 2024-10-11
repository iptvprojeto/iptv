import { FilmesSeriesPopularesResponse } from '../@types'
import { FilmeCard } from './filme-card'

export async function FilmesPopulares() {
  const filmesPopularesRequest = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&api_key=66347ef859ec10a2851c5d7a12eb9773',
  )

  const filmesPopulares: FilmesSeriesPopularesResponse =
    await filmesPopularesRequest.json()

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mt-2 text-orange-600 uppercase">
        Assista os melhores filmes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {filmesPopulares &&
          filmesPopulares.results
            .splice(0, 6)
            .map((filme) => <FilmeCard filme={filme} key={filme.id} />)}
      </div>
    </section>
  )
}
