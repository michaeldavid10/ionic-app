import React from 'react';
import { ApplicationContextModel } from '../models/applicationContext.model';

const ApplicationContext = React.createContext<ApplicationContextModel>({
  characters: [],
  refreshCharacters: () => {},
  isAuthenticated: false,
  refreshAuthenticated: () => {},
  resultInfo: {
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  },
  refreshResultInfo: () => {}
});

export default ApplicationContext;
