import { statusOrder } from '@/app/enums'
import { format } from 'date-fns'
import { ResultProximosJogos } from '../@types'
import { Jogo } from './jogo'

export async function ProximosJogos() {
  const hoje = new Date()
  const daquiUmaSemana = new Date()
  daquiUmaSemana.setDate(hoje.getDate() + 10)

  const jogosResponse = await fetch(
    `http://api.football-data.org/v4/matches?competitions=2152,2081,2037,2013&dateFrom=${format(hoje, 'yyyy-MM-dd')}&dateTo=${format(daquiUmaSemana, 'yyyy-MM-dd')}`,
    {
      headers: {
        'X-Auth-Token': 'f9f47d95fb7a40a8a89631f0557a9d0e',
      },
    },
  )

  const proximosJogos: ResultProximosJogos = await jogosResponse.json()

  const jogosOrdenados = proximosJogos?.matches?.sort((a, b) => {
    const dataA = new Date(a.utcDate).getTime()
    const dataB = new Date(b.utcDate).getTime()

    if (dataA !== dataB) {
      return dataA - dataB // Ordena por data (timestamp)
    }

    // Se as datas forem iguais, ordena pelo status
    return statusOrder[a.status] - statusOrder[b.status]
  })

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mt-2 text-orange-600 uppercase">
        Assista a todos os jogos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-8">
        {jogosOrdenados
          ?.slice(0, 8)
          ?.map((jogo) => <Jogo key={jogo.id} jogo={jogo} />)}
      </div>
    </section>
  )
}
