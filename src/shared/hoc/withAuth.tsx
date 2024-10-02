import React from 'react';
import { Navigate } from 'react-router-dom';

type WithAuthProps = {
  children?: React.ReactNode;
};

const withAuth = <P extends object>(Page: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P & WithAuthProps> = ({ ...props }) => {
    const isAuthenticated = false; 

    return isAuthenticated ? (
      <Page {...(props as P)} />
    ) : (
      <Navigate to="/sign-in" replace />
    );
  };

  return AuthenticatedComponent;
};

export default withAuth;