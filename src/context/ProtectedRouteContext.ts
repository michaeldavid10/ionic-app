import { createContext } from 'react';
import { ProtectedRouteModel } from '../models/protectedRoute.model';

export const ProtectedRouteContext = createContext<ProtectedRouteModel>({
  isAuthenticated: true,
  lookSlides: true,
});
