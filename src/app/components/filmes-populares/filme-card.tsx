import Image from 'next/image'
import Link from 'next/link'
import { FilmeSerie } from '../@types'

export function FilmeCard({ filme }: { filme: FilmeSerie }) {
  return (
    <>
      <Link
        href={`https://www.themoviedb.org/movie/${filme.id}`}
        target="blank"
      >
        <div className="m-2 p-3 bg-orange-600 h-80 flex flex-col items-center rounded-md md:relative group">
          <div className="relative w-full h-full transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0">
            <Image
              alt={`Capa do Filme ${filme.title}`}
              className="w-auto h-full"
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}?api_key=66347ef859ec10a2851c5d7a12eb9773`}
              height={500}
              width={500}
            />
            <p className="font-semibold z-10 absolute bottom-5 py-2 bg-orange-600 w-full text-center bg-opacity-80 text-white">
              {filme.title}
            </p>
          </div>

          <div className="md:absolute inset-0 p-3 bg-orange-600 md:flex flex-col items-center rounded-md md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 hidden">
            <Image
              alt={`Capa do Filme ${filme.title}`}
              className="w-auto h-full opacity-10"
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}?api_key=66347ef859ec10a2851c5d7a12eb9773`}
              height={500}
              width={500}
            />
            <p className="z-10 absolute top-5 py-2 w-full text-center bg-opacity-80 text-white px-3">
              {filme.overview.length > 200
                ? `${filme.overview.slice(0, 200)}...`
                : filme.overview}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
