import { useLocation } from "react-router-dom";
import React from 'react';

interface WithAuthRouteCheckProps {
  children?: React.ReactNode;
}

interface WithAuthRouteCheckState {
  pathname: string;
}

const withAuthRouteCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithAuthRouteCheckProps> => {
  const WithHack2024RouteCheck: React.FC<P & WithAuthRouteCheckProps> = ({ children }) => {
    const { pathname }: WithAuthRouteCheckState = useLocation();

    return (
      <>
        {(!pathname.includes("/HACK2024/sign-in") && !pathname.includes("/HACK2024/sign-up")) && <WrappedComponent {...(children as P)} />}
      </>
    );
  };

  WithHack2024RouteCheck.displayName = `withAuthRouteCheck(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithHack2024RouteCheck;
};

export default withAuthRouteCheck;