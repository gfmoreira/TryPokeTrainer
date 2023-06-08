import Image from "next/image";
import pokemonlist from "../../_mocks/pokemonList.json";
import pokemonTrainerList from "../../_mocks/pokemonTrainerList.json";

export default function PokemonList() {
  return (
    <div className="flex items-center justify-center flex-col">
      Pokemon List
      <div className="text-center bg-slate-700 w-1/2 h-80">
        Pokemon List Choose 6 Pokémons for you team
        <section className="mt-2 grid grid-cols-6 gap-4 justify-items-center">
          {pokemonlist.map((inside: any) => {
            return (
              <div
                key={`poke_${inside.id}`}
                className="rounded-md shadow-md bg-gray-300 w-32 h-32 flex items-center justify-center "
              >
                <Image
                  src={inside.url}
                  alt="Bulbasaur animeted gif"
                  width={inside.width}
                  height={inside.height}
                />
              </div>
            );
          })}
        </section>
      </div>
      <section className="mt-2 grid grid-cols-6 gap-6 ">
        {pokemonTrainerList.map((inside: any) => {
          return (
            <div
              key={`poke_${inside.id}`}
              className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
            >
              <Image
                src={inside.url}
                alt="Bulbasaur animeted gif"
                width={inside.width}
                height={inside.height}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
