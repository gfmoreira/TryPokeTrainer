"use client";
import Image from "next/image";
import { useSelectedContext } from "@/contexts/SelectedContext";

export default function SelectedPokemons() {
  const { pokemonSelected, setSelected, selected } = useSelectedContext();
  let borderColor = selected;
  console.log(selected, borderColor);
  return (
    <div className="flex items-center justify-center flex-col">
      <section className="mt-2 grid grid-cols-6 gap-6 ">
        <div>
          <div
            key={`first-pokemon`}
            className={`rounded-md shadow-md bg-gray-300 w-36 h-36 flex items-center justify-center ${
              borderColor == "firstPokemon" ? "border-2 border-purple-700" : ""
            }`}
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
            className={`rounded-md shadow-md bg-gray-300 w-36 h-36 flex items-center justify-center ${
              borderColor == "secondPokemon" ? "border-2 border-purple-700" : ""
            }`}
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
            className={`rounded-md shadow-md bg-gray-300 w-36 h-36 flex items-center justify-center ${
              borderColor == "thirdPokemon" ? "border-2 border-purple-700" : ""
            }`}
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
            className={`rounded-md shadow-md bg-gray-300 w-36 h-36 flex items-center justify-center ${
              borderColor == "fourthPokemon" ? "border-2 border-purple-700" : ""
            }`}
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
            className={`rounded-md shadow-md bg-gray-300 w-36 h-36 flex items-center justify-center ${
              borderColor == "fifthPokemon" ? "border-2 border-purple-700" : ""
            }`}
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
            className={`rounded-md shadow-md bg-gray-300 w-36 h-36 flex items-center justify-center ${
              borderColor == "sixthPokemon" ? "border-2 border-purple-700" : ""
            }`}
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
    </div>
  );
}
