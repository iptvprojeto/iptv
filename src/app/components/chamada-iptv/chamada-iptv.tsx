import { Canais } from './canais'
import { Players } from './players'
import { Streamings } from './stremings'

export function ChamadaIPTV() {
  return (
    <section className="my-3 md:grid md:grid-cols-2 md:gap-3 bg-white shadow-[0_0_8px_2px_rgba(0,0,0,0.3)] py-3 md:px-14">
      <h2 className="text-2xl font-bold text-orange-600 uppercase text-center md:col-span-2 md:mt-8">
        Venha para a melhor IPTV do BRASIL!
      </h2>
      <div className="md:row-span-2">
        <Players />
      </div>
      <div>
        <Canais />
      </div>
      <div>
        <Streamings />
      </div>
    </section>
  )
}
