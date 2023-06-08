import Image from "next/image";
import pokemonlist from "../../_mocks/pokemonList.json";

export default function PokemonList() {
  return (
    <div>
      Pokemon List
      <section className="flex items-center justify-center">
        {pokemonlist.map((inside: any) => {
          return (
            <div
              key={`poke_${inside.id}`}
              className="mx-2 rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center"
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
