import { getAllCharacterIds } from "@/app/store/Features/CharactersApi/charactersApiSlice";
import CharacterClient from "./CharacterClient";

type Props = {
  params: {
    character: string;
  };
};

export const generateStaticParams = async () => {
  const characterIds = await getAllCharacterIds();

  return characterIds.map((id) => ({
    character: id.toString(),
  }));
};

const CharacterPage = async ({ params: { character } }: Props) => {
  return <CharacterClient characterId={Number(character)} />;
};

export default CharacterPage;
