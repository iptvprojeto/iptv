import Image from 'next/image'
import Link from 'next/link'
import { FilmeSerie } from '../@types'

export function SerieCard({ serie }: { serie: FilmeSerie }) {
  return (
    <Link href={`https://www.themoviedb.org/tv/${serie.id}`} target="blank">
      <div className="m-2 p-3 bg-white h-80 flex flex-col items-center rounded-md md:relative group">
        <div className="relative w-full h-full transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0">
          <Image
            alt={`Capa do serie ${serie.name}`}
            className="w-auto h-full"
            src={`https://image.tmdb.org/t/p/original/${serie.poster_path}?api_key=66347ef859ec10a2851c5d7a12eb9773`}
            height={500}
            width={500}
          />
          <p className="font-semibold z-10 absolute bottom-5 py-2 bg-white w-full text-center bg-opacity-90 text-orange-600">
            {serie.name}
          </p>
        </div>

        <div className="md:absolute md:inset-0 p-3 bg-white md:flex flex-col items-center rounded-md md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 hidden">
          <Image
            alt={`Capa do serie ${serie.name}`}
            className="w-auto h-full opacity-10"
            src={`https://image.tmdb.org/t/p/original/${serie.poster_path}?api_key=66347ef859ec10a2851c5d7a12eb9773`}
            height={500}
            width={500}
          />
          <p className="z-10 absolute top-5 py-2 w-full text-center bg-opacity-80 text-orange-600 px-3">
            {serie.overview.length > 200
              ? `${serie.overview.slice(0, 200)}...`
              : serie.overview}
          </p>
        </div>
      </div>
    </Link>
  )
}
