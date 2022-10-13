import CallToImage from '../../assets/img/calltoimage.png';

export default function CallToAction(){
  return (
    <div className="container">
    <div className="bg-white dark:bg-slate-800 overflow-hidden relative border-b border-indigo-700">
      <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">
            Want to be millionaire ?
          </span>
          <span className="block text-indigo-500">
            It&#x27;s today or never.
          </span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
          I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Get started
            </button>
          </div>
        </div>
      </div>
      <img src={ CallToImage } className="absolute h-full max-w-1/4 hidden lg:block right-0 top-0" />
    </div>
    </div>
  );
}
