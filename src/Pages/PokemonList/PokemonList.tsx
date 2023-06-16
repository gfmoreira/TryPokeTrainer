"use client";
import Image from "next/image";
import pokemonlistData from "../../_mocks/pokemonList.json";
import pokemonList from "@/services/models/PokemonList";
import { useSelectedContext } from "@/contexts/SelectedContext";

export default function PokemonList() {
  const { setPokemonSelected, selected } = useSelectedContext();

  function updateList(
    key: string,
    value: string | number | boolean | object | null
  ) {
    setPokemonSelected((prevState: any) => ({
      ...prevState,
      [key]: value,
    }));
  }

  return (
    <div className="flex items-center justify-center flex-col pt-4">
      <div className="rounded-md text-center bg-slate-700 w-1/2 min-h-min pb-4">
        Pokemon List Choose 6 Pokémons for you team
        <section className="mt-2 grid grid-cols-6 gap-4 justify-items-center">
          {pokemonlistData.map((inside: pokemonList) => {
            return (
              <div key={`context-poke-${inside.id}`}>
                <div
                  key={`poke_${inside.id}`}
                  className="rounded-md shadow-md bg-gray-300 w-32 h-32 flex items-center justify-center "
                >
                  <Image
                    src={inside.url || ""}
                    alt="Bulbasaur animeted gif"
                    width={inside.width || 0}
                    height={inside.height || 0}
                  />
                </div>
                <button onClick={() => updateList(`${selected}`, inside)}>
                  Add
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
