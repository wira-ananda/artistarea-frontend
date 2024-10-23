const ArticlesList = ({ articles, loading, error }) => {
  return (
    <>
      {loading && <p className="text-yellowColor">Loading articles...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {articles.length > 0 && (
        <div>
          {articles.map((article, index) => {
            // Mengambil konten artikel yang dienkode
            const contentEncoded = article["content:encoded"]
              ? article["content:encoded"][0]
              : "";

            // Regex untuk mengambil URL gambar dari konten yang dienkode
            const imgRegex = /<img[^>]+src="([^">]+)"/;
            const matchImg = contentEncoded.match(imgRegex);

            // Regex untuk mengambil tanggal dari konten yang dienkode
            const dateRegex = /<strong>(.*?)<\/strong>/;
            const matchDate = contentEncoded.match(dateRegex);
            const lastIndex = articles.length - 1; // Perbaikan di sini

            return (
              <div key={index}>
                <a
                  className="flex pb-4 w-full"
                  href={article.link ? article.link[0] : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`flex w-full gap-4 md:text-[1.35rem] text-[1.5rem] cursor-pointer hover:bg-gray-900 transition-colors duration-200 ease-in-out ${
                      index === lastIndex ? "video-container" : ""
                    }`} // Perbaikan di sini
                  >
                    {/* Tampilkan gambar jika ada match */}
                    {matchImg && (
                      <div className="w-[30%] md:w-[20%] text-white h-full my-auto">
                        <img
                          className="w-[150px] h-[70px] object-cover"
                          src={matchImg[1]}
                          alt={`Image for ${
                            article.title ? article.title[0] : "article"
                          }`}
                        />
                      </div>
                    )}
                    <div className="w-[70%] md:w-[80%] md:my-auto">
                      {/* Tampilkan tanggal jika ada match */}
                      {matchDate && (
                        <p className="text-white">{matchDate[1]}</p>
                      )}
                      <div className="w-[96%]">
                        {/* Tampilkan judul artikel */}
                        <p className="text-white font-semibold">
                          {article.title ? article.title[0] : "No Title"}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ArticlesList;
