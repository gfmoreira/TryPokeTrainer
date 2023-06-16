"use client";
import PokemonList from "@/Pages/PokemonList/PokemonList";
import SelectedPokemons from "@/Pages/SelectedPokemons/SelectedPokemons";
import TrainerInfo from "@/Pages/TrainerInfo/TrainerInfo";
import { SelectedContext, emptyList } from "@/contexts/SelectedContext";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState();
  const [pokemonSelected, setPokemonSelected] = useState(emptyList);
  return (
    <SelectedContext.Provider
      value={{ pokemonSelected, setPokemonSelected, selected, setSelected }}
    >
      <div>
        <TrainerInfo />
        <PokemonList />
        <SelectedPokemons />
      </div>
    </SelectedContext.Provider>
  );
}
