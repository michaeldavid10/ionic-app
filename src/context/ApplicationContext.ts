import React from 'react';
import { ApplicationContextModel } from '../models/applicationContext.model';

const ApplicationContext = React.createContext<ApplicationContextModel>({
  characters: [],
  refreshCharacters: () => {},
});

export default ApplicationContext;
