import pokemonList from "./PokemonList";

interface TrainerInformations {
  name: string | undefined,
  email: string | undefined,
  password: string | undefined,
  phone: string | undefined,
  trainerId: string | undefined,
  trainerAvatar: pokemonList,
}

export default TrainerInformations;
