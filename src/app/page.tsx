import Banner from './components/banner/banner'
import { FilmesPopulares } from './components/filmes-populares/filmes-populares'
import { SeriePopulares } from './components/series-populares/series-populares'

export default function Home() {
  return (
    <>
      <main>
        <Banner />
      </main>
      <FilmesPopulares />
      <SeriePopulares />
    </>
  )
}
