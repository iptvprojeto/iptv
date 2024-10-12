import Image from 'next/image'

export function Canais() {
  return (
    <>
      <h3 className="text-xl font-semibold text-white text-center bg-orange-600 my-3 py-3">
        Todos os canais liberados
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-3 md:gap-y-1 gap-y-5 px-3 items-center md:place-items-center md:pt-16">
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Telecine"
            src="/images/canais/telecine.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Cartoon Network"
            src="/images/canais/cartoon-network.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="ESPN"
            src="/images/canais/espn.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="TNT"
            src="/images/canais/tnt.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Bandsports"
            src="/images/canais/bandsports.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Space"
            src="/images/canais/space.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Estadio TNT"
            src="/images/canais/estadio-tnt-sports.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Premiere"
            src="/images/canais/premiere.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Conmebol"
            src="/images/canais/conmebol.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Combate"
            src="/images/canais/combate.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Sky"
            src="/images/canais/sky.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
        <div className="w-24 md:w-40 flex justify-center p-4">
          <Image
            alt="Home and Health"
            src="/images/canais/home-and-health.png"
            width={150}
            height={150}
            className="w-full"
          />
        </div>
      </div>
    </>
  )
}
