import { Storage } from '@capacitor/storage';
import React, { useState } from 'react';
import { ApplicationContextModel } from '../models/applicationContext.model';
import { Character } from '../models/character.model';
import { ResultInfo } from '../models/resultInfo.model';
import ApplicationContext from './ApplicationContext';

const ApplicationContextProvider: React.FC = (props) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<ResultInfo>({
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  });

  const refreshCharacters = (characters: Character[]) => {
    setCharacters(characters);
  };

  const refreshAuthenticated = async () => {
    const { value } = await Storage.get({ key: 'IS_AUTHENTICATED' });
    setIsAuthenticated(value !== null ? true : false);
  };

  const refreshResultInfo = (info: ResultInfo) => {
    setResultInfo(info);
  };

  refreshAuthenticated();

  const applicationContext: ApplicationContextModel = {
    characters,
    refreshCharacters,
    isAuthenticated,
    refreshAuthenticated,
    resultInfo,
    refreshResultInfo
  };

  return (
    <ApplicationContext.Provider value={applicationContext}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
