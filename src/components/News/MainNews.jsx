import { newsData } from '../../../utils/NewsArray'

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsData.map((news, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              index % 5 === 0
                ? 'col-span-2 row-span-2'
                : index % 3 === 0
                ? 'col-span-1 row-span-2'
                : 'col-span-1'
            }`}
            style={{
              backgroundImage: `url(${news.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: index % 5 === 0 ? '400px' : '200px',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg font-bold">{news.title}</h2>
              <p className="text-sm opacity-80">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
