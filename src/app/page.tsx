import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[url('../assets/image/swbg.jpg')] animated-parallax h-screen">
      <div className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-2/4 justify-center items-start p-8">
            <h1 className="text-3xl md:text-7xl p-2 text-yellow-300 tracking-loose font-jedi uppercase">
              Star wars
            </h1>
            <p className="text-lg text-gray-50 mb-4">
            Explore the Star Wars galaxy with this new app! Discover fascinating facts, explore iconic planets, and stay up-to-date with the latest news. Enter now and may the Force be with you on your journey through the Star Wars universe.
            </p>
            <div className="flex gap-2">
              <Link
                href="/movies"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Movies
              </Link>
              <Link
                href="/characters"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Characters
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
