import { Movies } from "@/interfaces/movieInterfaces";

export const Card: React.FC<Movies> = ({title, episode_id}) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div className="h-96 w-72">
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src="https://www.komar.de/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/0/2/026-dvd2_star_wars_poster_classic_1_web.jpg"
        alt=""
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
    <div className="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
      <h1 className="font-dmserif text-3xl font-bold text-white">
        {title}
      </h1>
      <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Epidose: {episode_id}
      </p>
    </div>
  </div>
  );
};
