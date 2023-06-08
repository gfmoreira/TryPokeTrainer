"use client";
import Image from "next/image";
import pokemonlist from "../../_mocks/pokemonList.json";
import pokemonTrainerList from "../../_mocks/pokemonTrainerList.json";
import { useState } from "react";
import pokemonList from "@/services/models/PokemonList";

export default function PokemonList() {
  const emptyList: pokemonList = {
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
  console.log("--->", pokemonSelected);
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
          {pokemonlist.map((inside: any) => {
            return (
              <div key={`context-poke-${inside.id}`}>
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
                <button onClick={() => updateList(`${selected}`, inside.id)}>
                  Add
                </button>
              </div>
            );
          })}
        </section>
      </div>
      <section className="mt-2 grid grid-cols-6 gap-6 ">
        <div
          key={`first-pokemon`}
          className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
        >
          <button onClick={() => setSelected("firstPokemon")}>Set</button>
        </div>
        <div
          key={`second-pokemon`}
          className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
        >
          <button onClick={() => setSelected("secondPokemon")}>Set</button>
        </div>
        <div
          key={`third-pokemon`}
          className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
        >
          <button onClick={() => setSelected("thirdPokemon")}>Set</button>
        </div>
        <div
          key={`fourth-pokemon`}
          className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
        >
          <button onClick={() => setSelected("fourthPokemon")}>Set</button>
        </div>
        <div
          key={`fifth-pokemon`}
          className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
        >
          <button onClick={() => setSelected("fifthPokemon")}>Set</button>
        </div>
        <div
          key={`sixth-pokemon`}
          className="rounded-md shadow-md bg-gray-300 w-24 h-24 flex items-center justify-center "
        >
          <button onClick={() => setSelected("sixthPokemon")}>Set</button>
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
