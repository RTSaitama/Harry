export const HomePage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/media/magic-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Enter the World of Magic</h1>
        <p className="text-lg text-gray-300 mb-10">
          Choose your path: explore characters or learn powerful spells.
        </p>
  
      </div>
    </section>
  )
}
