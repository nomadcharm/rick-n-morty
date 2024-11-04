import { getAllCharacterIds } from "@/app/store/Features/CharactersApi/charactersApiSlice";
import CharacterClient from "./CharacterClient";

const CharacterPage = async ({ params }: { params: Promise<{ character: string }> }) => {
  const resolvedParams = await params;
  const characterId = Number(resolvedParams.character);

  return <CharacterClient characterId={characterId} />;
};

export const generateStaticParams = async () => {
  const characterIds = await getAllCharacterIds();

  return characterIds.map((id) => ({
    character: id.toString(),
  }));
};
export default CharacterPage;