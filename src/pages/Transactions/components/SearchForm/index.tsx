import { MagnifyingGlass } from "phosphor-react";
import { SearchFoarmContainer } from "./styles";

export default function SearchForm() {
  return (
    <SearchFoarmContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={32} /> Buscar
      </button>
    </SearchFoarmContainer>
  );
}
