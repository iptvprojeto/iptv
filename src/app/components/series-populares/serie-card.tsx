import Image from 'next/image'
import { FilmeSerie } from '../@types'

export function SerieCard({ serie }: { serie: FilmeSerie }) {
  return (
    <div className="m-2 p-3 bg-white flex flex-col items-center rounded-md relative">
      <Image
        alt={`Capa do Filme ${serie.name}`}
        className="w-auto h-full"
        src={`https://image.tmdb.org/t/p/original/${serie.poster_path}?api_key=66347ef859ec10a2851c5d7a12eb9773`}
        height={500}
        width={500}
      />
      <p className="font-semibold z-10 absolute bottom-5 py-2 bg-orange-600 w-full text-center bg-opacity-80 text-white">
        {serie.name}
      </p>
    </div>
  )
}
