"use client";
import Image from "next/image";
import regions from "@/_mocks/regions.json";
import pokemonList from "@/services/models/PokemonList";
import { useSelectedContext } from "@/contexts/SelectedContext";
import { useState } from "react";

export default function PokemonList() {
  const { setPokemonSelected, selected } = useSelectedContext();
  const [pokemonOfRegion, setPokemonOfRegion] = useState<any>(
    regions[0].pokemons
  );

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
        - Pokemon List Choose 6 Pokémons for you team -
        <section>
          <div>Select Region</div>
          <div className="flex items-center justify-center p-2">
            {regions.map((location: any) => {
              return (
                <div className="px-2" key={`region-${location.name}`}>
                  <button
                    onClick={() => {
                      setPokemonOfRegion(location.pokemons);
                    }}
                    className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    {location.name}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-2 grid grid-cols-6 gap-4 justify-items-center">
          {pokemonOfRegion.map((inside: pokemonList) => {
            return (
              <div key={`context-poke-${inside.id}`}>
                <div
                  key={`poke_${inside.id}`}
                  className="rounded-md shadow-md bg-gray-300 w-32 h-32 flex items-center justify-center"
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
