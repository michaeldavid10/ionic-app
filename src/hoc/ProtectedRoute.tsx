import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { ProtectedRouteContext } from '../context/ProtectedRouteContext';
interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
}) => {
  const protectedRouteContext = useContext(ProtectedRouteContext);

  useEffect(() => {
    console.log(`Route: ${path} Component: ${Component?.name}`);
  }, [Component, path]);

  return (
    <Route
      path={path}
      render={() =>
        protectedRouteContext.lookSlides ? (
          <Component />
        ) : (
          <Redirect to="/welcome" />
        )
      }
    />
  );
};

export default ProtectedRoute;
