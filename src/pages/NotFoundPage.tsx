export const NotFoundPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-900 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 drop-shadow-lg">
            404
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Accio Page!
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-md mx-auto leading-relaxed">
            It seems you've stumbled into the Forbidden Forest. This page doesn't exist in the Wizarding World.
          </p>
        </div>

        <div className="mb-12 flex justify-center gap-4 text-3xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>⚡</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoHome}
            className="px-8 py-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Return to Hogwarts
          </button>
          <button
            onClick={handleGoBack}
            className="px-8 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go Back
          </button>
        </div>

        <p className="mt-12 text-gray-400 text-sm">
          "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all — in which case, you fail by default." — J.K. Rowling
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;