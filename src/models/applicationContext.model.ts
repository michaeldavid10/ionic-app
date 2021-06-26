import { Character } from './character.model';

export interface ApplicationContextModel {
  characters: Character[];
  refreshCharacters: (characters: Character[]) => void;
}
