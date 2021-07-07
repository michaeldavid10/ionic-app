import { Character } from './character.model';
import { ResultInfo } from './resultInfo.model';

export interface ApplicationContextModel {
  characters: Character[];
  refreshCharacters: (characters: Character[]) => void;
  isAuthenticated: boolean;
  refreshAuthenticated: () => void;
  resultInfo: ResultInfo;
  refreshResultInfo: (info: ResultInfo) => void;
}
