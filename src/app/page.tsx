import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import RootLayout from "./layout";
import PokemonList from "@/Pages/PokemonList/PokemonList";

export default function Home() {
  return (
    <div>
      <PokemonList />
    </div>
  );
}
