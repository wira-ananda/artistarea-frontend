import Link from "next/link";

const ArticlesList = ({ articles, loading, error }) => {
  return (
    <>
      {loading && <p className="text-yellow-500">Loading articles...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {articles.length > 0 && (
        <div>
          {articles.map((article, index) => {
            const contentEncoded = article["content:encoded"]
              ? article["content:encoded"][0]
              : "";

            const imgRegex = /<img[^>]+src="([^">]+)"/;
            const matchImg = contentEncoded.match(imgRegex);

            const dateRegex = /<strong>(.*?)<\/strong>/;
            const matchDate = contentEncoded.match(dateRegex);

            const title = article.title ? article.title[0] : "No Title";
            const slug = title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "");

            const lastIndex = articles.length - 1;

            return (
              <div key={index}>
                <Link className="flex pb-4 w-full" href={`/${slug}`}>
                  <div
                    className={`pl-4 flex w-full gap-4 md:text-[1.35rem] text-[1.5rem] cursor-pointer hover:bg-gray-900 transition-colors duration-200 ease-in-out ${
                      index === lastIndex ? "video-container" : ""
                    }`}
                  >
                    {matchImg && (
                      <div className="w-[35%] md:w-[20%] text-white h-full my-auto">
                        <img
                          className="w-[150px] h-[70px] object-cover"
                          src={matchImg[1]}
                          alt={`Image for ${title}`}
                        />
                      </div>
                    )}
                    <div className="w-[65%] md:w-[80%] md:my-auto pt-[.5rem] md:pt-0">
                      {matchDate && (
                        <p className="text-white">{matchDate[1]}</p>
                      )}
                      <div className="w-[96%]">
                        <p className="text-white font-semibold">{title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ArticlesList;
