import Image from 'next/image'

export function Streamings() {
  return (
    <>
      <h3 className="text-xl font-semibold text-white text-center bg-orange-600 my-3 py-3">
        Assista todos os Streamings
      </h3>
      <div className="grid grid-cols-3 gap-y-5 px-3 items-center md:place-items-center md:pt-7">
        <div className="w-32 md:w-40 flex justify-center p-4">
          <Image
            alt="Neflix"
            src="/images/streaming/netflix.png"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="w-32 md:w-40 flex justify-center p-4">
          <Image
            alt="Max"
            src="/images/streaming/max.png"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="w-32 md:w-40 flex justify-center p-4">
          <Image
            alt="Prime Video"
            src="/images/streaming/prime-video.png"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="w-32 md:w-40 flex justify-center p-4">
          <Image
            alt="Disney Plus"
            src="/images/streaming/disney-plus.png"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="w-32 md:w-40 flex justify-center p-4">
          <Image
            alt="Globoplay"
            src="/images/streaming/globoplay.png"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <div className="w-32 md:w-40 h-fit flex justify-center p-4">
          <Image
            alt="Apple TV Plus"
            src="/images/streaming/apple-tv-plus.png"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </>
  )
}
