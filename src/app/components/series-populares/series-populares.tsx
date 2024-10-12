import { FilmesSeriesPopularesResponse } from '../@types'
import { SerieCard } from './serie-card'

export async function SeriePopulares() {
  const seriesPopularesRequest = await fetch(
    'https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1&api_key=66347ef859ec10a2851c5d7a12eb9773',
  )

  const seriesPopulares: FilmesSeriesPopularesResponse =
    await seriesPopularesRequest.json()

  return (
    <section className="text-center bg-orange-600 pt-2 md:px-8 md:pt-10 md:pb-1">
      <h2 className="text-2xl font-bold text-white uppercase">
        Assista as melhores series
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 md:my-12">
        {seriesPopulares &&
          seriesPopulares.results
            .splice(0, 6)
            .map((serie) => <SerieCard serie={serie} key={serie.id} />)}
      </div>
    </section>
  )
}
