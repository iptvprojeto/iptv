export default function Banner() {
  return (
    <>
      <section className="flex justify-center bg-banner h-screen bg-cover bg-center md:bg-right">
        <div className="z-10 absolute bottom-32 text-center flex flex-col items-center w-96 bg-white rounded-md py-5 px-3 bg-opacity-65 shadow-lg md:w-3/4 md:mx-10">
          <h3 className="text-3xl uppercase font-bold text-orange-600">
            O Melhor da TV em um só lugar!
          </h3>
          <button
            type="button"
            className="px-3 py-3 bg-orange-600 rounded-md w-full my-5 text-white font-semibold uppercase hover:bg-orange-500"
          >
            Assine agora
          </button>
        </div>
      </section>
    </>
  )
}
