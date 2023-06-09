"use client";
import Image from "next/image";
import pokemonlistData from "../../_mocks/pokemonList.json";
import { useState } from "react";
import pokemonList from "@/services/models/PokemonList";
import selectedPokemons from "@/services/models/SelectedPokemons";

export default function PokemonList() {
  const emptyList: selectedPokemons = {
    firstPokemon: undefined,
    secondPokemon: undefined,
    thirdPokemon: undefined,
    fourthPokemon: undefined,
    fifthPokemon: undefined,
    sixthPokemon: undefined,
  };
  const [pokemonSelected, setPokemonSelected] = useState(emptyList);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  function updateList(
    key: string,
    value: string | number | boolean | object | null
  ) {
    setPokemonSelected((prevState: any) => ({
      ...prevState,
      [key]: value,
    }));
  }
  console.log(pokemonSelected);
  return (
    <div className="flex items-center justify-center flex-col">
      Pokemon List
      <div className="rounded-md text-center bg-slate-700 w-1/2 min-h-min pb-4">
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          <div>
            <div>Trainer Name:</div> <input />
          </div>
          <div>
            <div>Trainer Id:</div> <input value={" 00001"} disabled={true} />
          </div>
        </div>
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
      <section className="mt-2 grid grid-cols-6 gap-6 ">
        <div>
          <div
            key={`first-pokemon`}
            className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
          >
            <Image
              src={pokemonSelected?.firstPokemon?.url || ""}
              alt="Bulbasaur animeted gif"
              width={pokemonSelected?.firstPokemon?.width || 0}
              height={pokemonSelected?.firstPokemon?.height || 0}
            />
          </div>
          <button
            className="text-stone-900"
            onClick={() => setSelected("firstPokemon")}
          >
            Set
          </button>
        </div>
        <div>
          <div
            key={`second-pokemon`}
            className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
          >
            <Image
              src={pokemonSelected?.secondPokemon?.url || ""}
              alt="Bulbasaur animeted gif"
              width={pokemonSelected?.secondPokemon?.width || 0}
              height={pokemonSelected?.secondPokemon?.height || 0}
            />
          </div>
          <button
            className="text-stone-900"
            onClick={() => setSelected("secondPokemon")}
          >
            Set
          </button>
        </div>
        <div>
          <div
            key={`third-pokemon`}
            className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
          >
            <Image
              src={pokemonSelected?.thirdPokemon?.url || ""}
              alt="Bulbasaur animeted gif"
              width={pokemonSelected?.thirdPokemon?.width || 0}
              height={pokemonSelected?.thirdPokemon?.height || 0}
            />
          </div>
          <button
            className="text-stone-900"
            onClick={() => setSelected("thirdPokemon")}
          >
            Set
          </button>
        </div>
        <div>
          <div
            key={`fourth-pokemon`}
            className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
          >
            <Image
              src={pokemonSelected?.fourthPokemon?.url || ""}
              alt="Bulbasaur animeted gif"
              width={pokemonSelected?.fourthPokemon?.width || 0}
              height={pokemonSelected?.fourthPokemon?.height || 0}
            />
          </div>
          <button
            className="text-stone-900"
            onClick={() => setSelected("fourthPokemon")}
          >
            Set
          </button>
        </div>
        <div>
          <div
            key={`fifth-pokemon`}
            className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
          >
            <Image
              src={pokemonSelected?.fifthPokemon?.url || ""}
              alt="Bulbasaur animeted gif"
              width={pokemonSelected?.fifthPokemon?.width || 0}
              height={pokemonSelected?.fifthPokemon?.height || 0}
            />
          </div>
          <button
            className="text-stone-900"
            onClick={() => setSelected("fifthPokemon")}
          >
            Set
          </button>
        </div>
        <div>
          <div
            key={`sixth-pokemon`}
            className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
          >
            <Image
              src={pokemonSelected?.sixthPokemon?.url || ""}
              alt="Bulbasaur animeted gif"
              width={pokemonSelected?.sixthPokemon?.width || 0}
              height={pokemonSelected?.sixthPokemon?.height || 0}
            />
          </div>
          <button
            className="text-stone-900"
            onClick={() => setSelected("sixthPokemon")}
          >
            Set
          </button>
        </div>
      </section>
      {/* <section className="mt-2 grid grid-cols-6 gap-6 ">
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
      </section> */}
    </div>
  );
}
