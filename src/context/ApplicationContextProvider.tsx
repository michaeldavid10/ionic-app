import React, { useState } from 'react';
import { ApplicationContextModel } from '../models/applicationContext.model';
import { Character } from '../models/character.model';
import ApplicationContext from './ApplicationContext';

const ApplicationContextProvider: React.FC = (props) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const refreshCharacters = (characters: Character[]) => {
    setCharacters(characters);
  };

  const applicationContext: ApplicationContextModel = {
    characters,
    refreshCharacters,
  };

  return (
    <ApplicationContext.Provider value={applicationContext}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
