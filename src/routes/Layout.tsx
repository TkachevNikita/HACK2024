import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Main from '@components/common/Main';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
        <Main>
          {children}
        </Main>
      <Footer/>
    </>
  );
};

export default Layout;