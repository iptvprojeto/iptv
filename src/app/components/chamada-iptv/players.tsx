import Image from 'next/image'

export function Players() {
  return (
    <>
      <h3 className="text-xl font-semibold text-white text-center bg-orange-600 my-3 py-3">
        Funciona em qualquer Player Smart
      </h3>
      <div className="flex flex-col gap-3 px-3">
        <div className="border-orange-600 border-2 rounded-lg p-2 shadow-lg bg-white flex flex-col items-center">
          <h4 className="text-center text-lg font-semibold text-orange-600">
            Smart TV
          </h4>
          <Image
            alt="Smart TV"
            src="/images/iptv/tv-smart.png"
            width={500}
            height={500}
            className="h-64 w-fit"
          />
        </div>
        <div className="border-orange-600 border-2 rounded-lg p-2 shadow-lg bg-white flex flex-col items-center">
          <h4 className="text-center text-lg font-semibold text-orange-600">
            TV Box
          </h4>
          <Image
            alt="TV Box"
            src="/images/iptv/tv-box.png"
            width={500}
            height={500}
            className="h-64 w-fit"
          />
        </div>
        <div className="border-orange-600 border-2 rounded-lg p-2 shadow-lg bg-white flex flex-col items-center">
          <h4 className="text-center text-lg font-semibold text-orange-600">
            FireStick
          </h4>
          <Image
            alt="Firestick"
            src="/images/iptv/firestick.png"
            width={500}
            height={500}
            className="h-64 w-fit"
          />
        </div>
      </div>
    </>
  )
}
