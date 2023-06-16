"use client";
import selectedPokemons from "@/services/models/SelectedPokemons";
import { createContext, useContext } from "react";

export const emptyList: selectedPokemons = {
  firstPokemon: undefined,
  secondPokemon: undefined,
  thirdPokemon: undefined,
  fourthPokemon: undefined,
  fifthPokemon: undefined,
  sixthPokemon: undefined,
};

export type ContextProps = {
  pokemonSelected?: any;
  setPokemonSelected?: any;
  selected?: any;
  setSelected?: any;
};

export const SelectedContext = createContext<ContextProps>({
  pokemonSelected: emptyList,
});

export const useSelectedContext = () => useContext(SelectedContext);
