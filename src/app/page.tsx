import Banner from './components/banner/banner'
import { ChamadaIPTV } from './components/chamada-iptv/chamada-iptv'
import { ContratarIPTV } from './components/contratar-iptv/contratar-iptv'
import { FilmesPopulares } from './components/filmes-populares/filmes-populares'
import { ProximosJogos } from './components/proximos-jogos/proximos-jogos'
import { SeriePopulares } from './components/series-populares/series-populares'

export default function Home() {
  return (
    <>
      <main>
        <Banner />
      </main>
      <FilmesPopulares />
      <SeriePopulares />
      <ProximosJogos />
      <ChamadaIPTV />
      <ContratarIPTV />
    </>
  )
}
