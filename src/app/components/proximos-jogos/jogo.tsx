import { X } from '@phosphor-icons/react/dist/ssr'
import { format } from 'date-fns'
import Image from 'next/image'
import { Jogo as JogoType } from '../@types'

export function Jogo({ jogo }: { jogo: JogoType }) {
  return (
    <>
      <div className="m-2 p-3 bg-orange-600 flex flex-col items-center rounded-md relative">
        <div className="grid grid-cols-3 py-2 items-center">
          <Image
            alt={`Emblema ${jogo.competition.name}`}
            className="col-span-1"
            src={`${jogo.competition.emblem}`}
            height={250}
            width={250}
          />
          <h3 className="font-semibold text-white col-span-2">
            {jogo.competition.name}
          </h3>
        </div>
        <hr />
        <div className="flex bg-white items-center justify-around p-5 rounded-md shadow-lg">
          <div className="flex flex-col w-1/3">
            <Image
              className="h-auto"
              alt={`Emblema ${jogo.homeTeam.name}`}
              src={`${jogo.homeTeam.crest}`}
              height={250}
              width={250}
            />
            <p className="mt-1 text-orange-600 text-xl font-semibold">
              {jogo.score.fullTime.home}
            </p>
          </div>
          <X size={20} className="text-orange-600" weight="bold" />
          <div className="flex flex-col w-1/3">
            <Image
              alt={`Emblema ${jogo.awayTeam.name}`}
              src={`${jogo.awayTeam.crest}`}
              height={250}
              width={250}
            />
            <p className="mt-1 font-semibold text-orange-600 text-xl">
              {jogo.score.fullTime.away}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-2 text-center text-white">
          <p>
            {format(jogo.utcDate, 'dd/MM/yyyy')} as{' '}
            {format(jogo.utcDate, 'HH:mm')}
          </p>
        </div>
      </div>
    </>
  )
}
